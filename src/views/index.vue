<template>
  <div class='base'>
    <div class='heade'></div>
    <div class='content'>
      <div class='content-left'>
          <button @click="addBox">添加</button>
          <button @click="delBox">删除</button>
      </div>
      <div class='content-right'>
        <dragLayout></dragLayout>

      </div>
    </div>


  </div>

</template>

<script>
  import dragLayout from "@/components/dragLayout";
  export default {
    name: 'index',
    components: {
      dragLayout

    },

    data() {
      return {

      }

    },
    mounted() {

    },
    methods: {
        addBox(){
            this.$children[0].addBox();
        },
        delBox(){
             this.$children[0].delBox();

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
    margin-top: 10px;
    flex: 1;
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
    overflow-y: auto;
  }


  .li-box {
    display: none;

  }

  .showBox {
    display: block !important;

  }
  

</style>
