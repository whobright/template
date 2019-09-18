<template>
  <div>
    <div class="login">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
          <el-button @click="register('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class='background' src='../assets/img/background1.jpg'>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {

    },

    data() {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户不能为空'));
        }
        callback();

      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        callback();
      };

      return {
        ruleForm: {
          pass: '',
          user: ''
        },
        rules: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          user: [{
            validator: checkUser,
            trigger: 'blur'
          }]
        }
      };
    },
    mounted() {

    },
    methods: {
      Login(username, password) {
        let url = '/users/Login';
        let params = {
          username: username,
          password: password
        }
        this.$axios(url, params).then(res => {
          if (res.status == 1) {
            this.$router.push({
              path: "test",
              query: {}
            });


          } else {
            alert(res.msg);
          }


        });
      },
      Register(username, password) {
        let url = '/users/Register';
        let params = {
          username: username,
          password: password
        }
        this.$axios(url, params).then(res => {
          if (res.status == 1) {
            alert('注册成功');

          } else {
            alert('注册失败');
          }


        });
      },
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.Login(this.ruleForm.user, this.ruleForm.pass);

          } else {
            return false;
          }
        });
      },
      register(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.Register(this.ruleForm.user, this.ruleForm.pass);

          } else {
            return false;
          }
        });
      }


    },

  }

</script>
<style scoped>
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* opacity:0.5; */
    z-index: -1;
  }

</style>
