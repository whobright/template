<template>
  <div>
    <div class="Odometer"></div>
    <div class="Odometer2 OdometerBg"></div>

  </div>


</template>
<script>
  import rollNumber from "../utils/rollNumber";

  import $ from 'jquery';
  export default {
    name: 'numberList',
    components: {

    },
    data() {
      return {
      }
    },
    mounted() {
         this.odo1 = new rollNumber('.Odometer',{
            num : this.num
        });
        this.odo2 = new rollNumber('.Odometer2',{
            num : this.num
        });
      
    },
    watch:{
      num(){
        this.odo1.update(this.num);
        this.odo2.update(this.num);
      }
    },
    props:{
      num:{
        type: Number,
        default:0,
        
      }

    },
    methods: {


    }

  }

</script>
<style >
  .Odometer,
  .OdometerBg {
    margin: 40px;
  }

  .OdometerBg .number-animate .number-animate-dom,
  .OdometerBg .number-animate .number-animate-dot {
    width: 40px;
  }

  .OdometerBg .number-animate .number-animate-dot span {
    background: #222;
    color: yellow;
    border-left: 1px solid #fff;
  }

  .OdometerBg .number-animate .number-animate-dom {
    background: #222;
    color: yellow;
    border-left: 1px solid #fff;
  }

  .number-animate {
    line-height: 45px;
    height: 45px;
    font-size: 40px;
    overflow: hidden;
    display: inline-block;
    position: relative;
  }

  .number-animate .number-animate-dot {
    width: 21px;
    float: left;
    text-align: center;
  }

  .number-animate .number-animate-dom {
    width: 27px;
    text-align: center;
    float: left;
    position: relative;
    top: 0;
  }

  .number-animate .number-animate-dom span,
  .number-animate .number-animate-dot span {
    float: left;
    width: 100%;
    height: 45px;
    line-height: 1.1;
  }

</style>
