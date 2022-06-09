<template>
  <el-col :span="12">
    <div :id="idName"></div>
  </el-col>
</template>

<script>
import { Chart } from "@antv/g2";

export default {
  props: {
    idName: {
      type: String,
      default: "g2",
    },
    data: {
      type: Array,
      require: true,
      default: () => [
        { genre: "Sports--1", sold: 111 },
        { genre: "Strategy--1", sold: 92 },
        { genre: "Action--1", sold: 133 },
        { genre: "Shooter--1", sold: 144 },
        { genre: "Other--1", sold: 155 },
      ],
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
  },
  watch: {
    data() {
      this.changeInitChart();
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this;

      // Step 1: 创建 Chart 对象
      this.chart = new Chart({
        container: that.idName, // 指定图表容器 ID
        width: that.width, // 指定图表宽度
        height: that.height, // 指定图表高度
      });

      // Step 2: 载入数据源

      this.chart.data(that.data);

      // Step 3: 创建图形语法，绘制图形
      this.chart
        .area()
        .position("genre*sold")
        .shape("smooth")
        .color("rgb(26 101 122)");
      this.chart
        .line()
        .position("genre*sold")
        .shape("smooth")
        .color("rgb(26 101 122)");

      this.chart.tooltip({
        showCrosshairs: true,
        line: { style: { fill: "red" } },
      });

      // Step 4: 渲染图表
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