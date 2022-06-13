<template>
  <div id="container"></div>
</template>

<script>
import { Chart } from "@antv/g2";

export default {
  name: "TabLine",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    status1:{
      type:String
    },
    status2:{
      type:String
    },
  },

  components: {},

  watch: {
    data() {
      this.changeInitChart();
    },
  },
  mounted() {
    this.InitChart();
  },
  methods: {
    InitChart() {
      this.chart = new Chart({
        container: "container",
        autoFit: true,
        height: 170,
        padding: [30, 20, 30, 30]
      });


      this.chart.data(this.data);

      this.chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      this.chart.legend( {
        position: "top",
      });

      this.chart.scale({
        数据调取: {
          min: 0,
          max: 400,
        },
      });
      this.chart.axis("数据推送", false);

      this.chart.annotation().text({
        content: "单位：次",
         position: [0, 400],
        style: {
          fill: "#8c8c8c",
          fontWeight: 300,
        },
        offsetY: -18,
        offsetX: -88,
      });


      this.chart
        .line()
        .position("date*数据调取")
        .shape("smooth")
        
      this.chart
        .area()
        .adjust('stack')
        .position("date*数据调取")
        .shape("smooth")

      this.chart
        .line()
        .position("date*数据推送")
        .shape("smooth")
        
      this.chart
        .area()
        .position("date*数据推送")
        .shape("smooth")

      this.chart.interaction("active-region");
      this.chart.render();
    },
    changeInitChart() {
      this.chart.changeData(this.data);
    },
  },
};
</script>
<style>
</style>