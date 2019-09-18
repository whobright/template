<template>
  <div v-bind:id="echartId"></div>
</template>
<script>
  import echarts from "echarts";
  /* echartId由父组件传入
    div 容器大小 由父组件定义
  */
  export default {
    name: "echartBar",
    data() {
      return {
      };
    },
    watch: {
    },
    props: {
      echartId: {
        type: String,
        required: true
      },
    },
    mounted() {
      this.drawEchart(this.echartId);

    },
    methods: {

      drawEchart(echartId) {
        let myChart = this.$echarts.init(document.getElementById(echartId));
         let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
      
        myChart.setOption(option);
        window.onresize = function () {
          myChart.resize();
        }
      }
    }
  };

</script>
<style>
</style>
