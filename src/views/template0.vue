<template>
  <div class='base'>
    <div class='heade'></div>
    <div class='content'>
      <div class='content-left'></div>
      <div class='content-right'>


      </div>
    </div>


  </div>

</template>

<script>
  export default {
    name: 'template0',
    components: {

    },

    data() {
      return {

      }

    },
    mounted() {

    },
    methods: {







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
    height: 20vh;
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
    flex: 1;
    margin-right: 10px;
    border: 1px solid red;

  }

  .content-right {
    width: 25vw;
    border: 1px solid red;
  }


  .li-box {
    display: none;

  }

  .showBox {
    display: block !important;

  }

</style>
