//此文件用于自定义全局指令
/*vue指令
钩子函数:
bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
钩子函数参数
el：指令所绑定的元素，可以用来直接操作 DOM 。
binding：一个对象，包含以下属性：
    name：指令名，不包括 v- 前缀。
    value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
    oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
    arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
    modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
*/
/* 鼠标事件
onmousedown:鼠标按钮被按下（左键或者右键）时触发。不能通过键盘触发。
onmouseup:鼠标按钮松开时触发。不能通过键盘触发。
onmousemove:鼠标在元素内部移动时触发。
*/

export default (Vue) => {
    //元素可拖拽指令
  Vue.directive("drag", function (el, bindings) {
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft;
      let disy = e.pageY - el.offsetTop;
      document.onmousemove = function (e) {
        el.style.left = e.pageX - disx + 'px';
        el.style.top = e.pageY - disy + 'px';
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      }
    }

  }),
  Vue.directive("focus", function (el, bindings) {
    el.onmousemove= function(e){
     
    }
   

  })

}
