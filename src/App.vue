<template>
  <div id="app">
    <router-view />

  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      //this.initView();

    },
    methods: {
      initView() {
        
        let width = screen.availWidth;
        let height = screen.availHeight;
        document.getElementsByTagName("body")[0].style.height = screen.availHeight+"px";
        document.getElementsByTagName("body")[0].style.width  = screen.availWidth+"px";
        console.log(width);
        console.log(height);
        let body = document.getElementsByTagName("body");
        // body.style.width = screen.availWidth+'px;';
        // body.style.height = screen.availHeight+'px;';



      }

    }
  }

</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }

</style>
