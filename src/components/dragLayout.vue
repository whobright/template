<template>
  <grid-layout :layout.sync="layout" :col-num="12" :row-height="50" :is-draggable="true" :is-resizable="true"
    :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
    <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i"
      class='box' v-html="item.components">
      {{item.i}}
    
    </grid-item>
  </grid-layout>

</template>
<script>
  import VueGridLayout from 'vue-grid-layout';
    import echartBar from "./echart_bar";
  export default {
    name: 'dragLayout',
    components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem,
      echartBar
    },
    data() {
      return {
        layout: [

        ],

      }
    },
    methods: {
      addBox() {
        let index = this.layout.length - 1;
        let rowIndex = index%3+1;//行标
        let colIndex = Math.floor(index / 3)+1;//列标
        let lastX = index == -1 ? 0 : this.layout[index].x;//最后一个盒子的横坐标
        let lastY = index == -1 ? 0 : this.layout[index].y;//最后一个盒子的纵坐标
        let width = 4;//盒子的宽度
        let height = 5;//盒子的高度
        if (index == -1) {
          this.layout.push({
            x: 0,
            y: 0,
            w: width,
            h: height,
            i: index + 1,
            components:` ${rowIndex}   ${colIndex}     `
          });

        } else if (rowIndex <= 2) {
          this.layout.push({
            x: lastX + width,
            y: lastY,
            w: width,
            h: height,
            i: index + 1,
            components:` ${rowIndex}   ${colIndex}     `
          });
        } else {
          this.layout.push({
            x: 0,
            y: lastY + height,
            w: width,
            h: height,
            i: index + 1,
            components:` ${rowIndex}   ${colIndex}     `
          });

        }



      },
      delBox() {
        if (this.layout.length == 0) {
          alert('没有可删除项');
        }
        this.layout.pop();


      }


    }

  }

</script>
<style scoped>
  .box {
    border: 1px solid red;
    /* background-color: aqua; */
  }
   .bar {
    position: absolute;
    width: 400px;
    height: 200px;
  }

</style>
