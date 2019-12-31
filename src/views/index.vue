<template>
  <div class='base'>
    <div class='heade'>
    
    </div>
    <div class='content'>
      <div class='content-left'>
        <button @click="addBox">添加</button>
        <button @click="delBox">删除</button>
            <numberList :num='num'></numberList>
     
      </div>
      <div class='content-right'>

        <dragLayout></dragLayout>

      </div>
    </div>


  </div>

</template>

<script>
  import dragLayout from "@/components/dragLayout";
  import numberList from "@/components/numberList";
  export default {
    name: 'index',
    components: {
      dragLayout,
      numberList

    },

    data() {
      return {
        num:0,

      }

    },
    mounted() {
      window.addEventListener("orientationchange", function () {
        alert(window.orientation);
      }, false);
         //改变数值
        setInterval(()=>{
            this.num +=117;

            this.num +=230;
        },4000)

    },
    methods: {
      addBox() {
        this.$children[1].addBox();
      },
      delBox() {
        this.$children[1].delBox();

      }

    }

  }

</script>
<style scoped>
  .base {
    width: 100%;
    height: 100%;
    padding: 0 10px 10px 10px;
    display: flex;
    flex-direction: column;
  }

  .heade {
    height: 15%;
    width: 100%;
    border: 1px solid red;
  }

  .content {
    width: 100%;
    height: 85%;
    margin-top: 10px;
    border: 1px solid red;
    display: flex;

  }

  .content-left {
    width: 20vw;
    margin-right: 10px;
    border: 1px solid red;

  }

  .content-right {
    border: 1px solid red;
    flex: 1;
    overflow-y: scroll;
  }


  .li-box {
    display: none;

  }

  .showBox {
    display: block !important;

  }

</style>
