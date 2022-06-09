<template>
  <el-col :span="12">
    <div class="item-card">
      <div id="container"></div>
    </div>
  </el-col>
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
        height: 200,
      });

      this.chart.data(this.data);
      

      this.chart.tooltip({
        showCrosshairs: false,
        shared: true,
      });

      this.chart
        .line()
        .position("date*数据调取")
        .shape("smooth", "circle")
        .color("rgb(84, 115, 232)");
      this.chart
        .area()
        .position("date*数据调取")
        .shape("smooth", "circle")
        .color("rgb(84, 115, 232)");
      this.chart
        .line()
        .position("date*数据推送")
        .shape("smooth", "circle")
        .color("rgb(35, 188, 202)");
      this.chart
        .area()
        .position("date*数据推送")
        .shape("smooth", "circle")
        .color("rgb(35, 188, 202)");

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