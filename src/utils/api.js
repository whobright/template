//此文件用于封装请求的接口
import axios from 'axios';
import qs from 'qs';
// 环境的切换
let baseUrl;
if (process.env.NODE_ENV === 'development') {//本地开发环境
    //baseUrl = 'http://10.100.60.3:8080'
    baseUrl = 'http://localhost:3000'
  } else if (process.env.NODE_ENV === 'production') {//服务器生产环境
    baseUrl = 'http://10.100.60.4:8080'
  }

  const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    timeout: 10000,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
  });
  // request 拦截器,序列化请求数据，视服务端的要求
instance.interceptors.request.use(
    config => {
      // Tip: 1
      // 请求开始的时候可以结合 vuex 开启全屏的 loading 动画
      // Tip: 2
      // 带上 token , 可以结合 vuex 或者重 localStorage
      // if (store.getters.token) {
      //   config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
      // } else {
      //   // 重定向到登录页面
      // }
      // Tip: 3
      // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
      if (config.method.toLocaleLowerCase() === 'post' ||
        config.method.toLocaleLowerCase() === 'put' ||
        config.method.toLocaleLowerCase() === 'delete') {
        config.data = qs.stringify(config.data);
      }
      return config;
    },
    error => {
      // 请求错误时做些事(接口错误、超时等)
      // Tip: 4
      // 关闭loadding
      console.log('request:', error);
      // 1.判断请求超时
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案');
        // return service.request(originalRequest);//例如再重复请求一次
      }
      // 2.需要重定向到错误页面
      const errorInfo = error.response;
      console.log(errorInfo);
      if (errorInfo) {
        // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
        // const errorStatus = errorInfo.status; // 404 403 500 ... 等
        // router.push({
        //   path: `/error/${errorStatus}`
        // });
      }
      return Promise.reject(error); // 在调用的那边可以拿到(catch)你想返回的错误信息
    }
  );
  
  // 处理来自网络或者服务器的错误
  instance.interceptors.response.use(
    (response) => {
      // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
      let data = response.data || response.request.responseText;
      // 根据返回的code值来做不同的处理（和后端约定）
      switch (data.code) {
        case '':
          break;
        default:
      }
      // 若不是正确的返回code，且已经登录，就抛出错误
      // const err = new Error(data.description)
      // err.data = data
      // err.response = response
      // throw err
      return data;
    },
    err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误';
            break;
  
          case 401:
            err.message = '未授权，请登录';
            break;
  
          case 403:
            err.message = '拒绝访问';
            break;
  
          case 404:
            err.message = `请求地址出错: ${err.response.config.url}`;
            break;
  
          case 408:
            err.message = '请求超时';
            break;
  
          case 500:
            err.message = '服务器内部错误';
            break;
  
          case 501:
            err.message = '服务未实现';
            break;
  
          case 502:
            err.message = '网关错误';
            break;
  
          case 503:
            err.message = '服务不可用';
            break;
  
          case 504:
            err.message = '网关超时';
            break;
  
          case 505:
            err.message = 'HTTP版本不受支持';
            break;
  
          default:
            err.message = `连接错误${err.response.status}`;
        }
      }
      console.error(err);
      // 此处可以使用 element UI 的提示组件
      // Message.error(`ERROR: ${err}`);
      return Promise.reject(err); // 返回接口返回的错误信息
    }
  );

  /**
 * 封装axios 请求
 * @param url url地址
 * @param data  传到后台的参数
 * @param method 请求类型,默认使用get
 * @param opts  {} 对象格式。自定义配置项，该参数中的值会覆盖前面的值
 * @returns {Promise<any>}
 */



  function $axios (url = '', data = {}, method = 'GET', opts = {}) {
    return new Promise((resolve, reject) => {
      let type = method.toLocaleLowerCase();
      // `data` 作为请求主体发送的数据, 仅适用于请求方法“PUT”，“POST”和“PATCH”
      let isDataProp = type === 'post' || type === 'put' || type === 'patch';
      let options = {
        url: `${url}`, // 添加时间，禁用缓存
        method: method,
        params: !isDataProp ? data : {},
        data: isDataProp ? data : {},
        responseType: opts.dataType || 'json',
        headers: opts.headers ||
          {
            // 设置默认请求头
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
      };
  
      Object.assign(options, opts); // 合并自定义配置
  
      instance(options)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  export default $axios;