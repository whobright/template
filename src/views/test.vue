<template>
  <div class='base'>
    <div class='box'>
      <div v-drag class='circle'>
      </div>
      <div v-drag class='circle'></div>
    </div>
    <div class='box'>
      <echartBar v-drag echartId='bar' class='bar'></echartBar>
    </div>
    <div class='box'>
      <el-input-number v-drag v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>


  </div>

</template>
<script>
  import echartBar from "@/components/echart_bar";
  export default {
    name: 'test',
    components: {
      echartBar,
    },

    data() {
      return {
        dataUpdateTime: '',
        num: 1,
      }

    },
    mounted() {

    },
    methods: {
      handleChange(value) {
        
      },
  
   



    }

  }

</script>
<style scoped>
  .base {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .box {
    position: relative;
    align-self: center;
    border: 1px solid #15467E;
    width: 30%;
    height: 50%;
  }

  .circle {
    position: absolute;
    cursor: pointer;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
  }

  .bar {
    position: absolute;
    width: 400px;
    height: 200px;
  }

</style>
