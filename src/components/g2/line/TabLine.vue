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
    colors: {
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
    console.log(this);
    this.InitChart();
  },
  methods: {
    InitChart() {
      this.chart = new Chart({
        container: "container",
        autoFit: true,
        height: 170,
        padding: [30, 20, 30, 30],
      });

      this.chart.data(this.data);

      this.chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      this.chart.legend({
        position: "top",
      });

      this.chart.scale({
        value: {
          min: 0,
          max: 400,
        },
      });

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
        .area()
        .position("date*value")
        .color("status", this.colors)
        .shape("smooth");

      this.chart
        .line()
        .position("date*value")
        .color("status", this.colors)
        .shape("smooth");

      this.chart
        .point()
        .position("date*value")
        .color("status", this.colors)
        .shape("circle");
      this.chart.interaction("active-region");
      this.chart.render();
    },
    changeInitChart() {
      this.chart.destroy();
      this.InitChart()
    },
  },
};
</script>
<style>
</style>