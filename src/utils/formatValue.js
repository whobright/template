//此文件用于处理数据格式
/*toFixed()返回的格式是string类型,一般用于固定数据的位数，比较大小时应该注意
  Math.floor(3.1415);  // 3 下取整
  Math.ceil(3.1415);   // 4 上取整
  Math.round(3.14);    // 3 四舍五入取整
  Math.round(3.54);    // 4
*/
export const tenThousands=value=>{//四舍五入保留两位小数
    if (typeof value!=='Number'){
        value = parseFloat(value);
    }
    return value.toFixed(2);
}