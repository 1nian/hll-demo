<template>
  <el-col :span="12">
    <div class="item-card">
      <div id="container"></div>
    </div>
  </el-col>
</template>

<script>
import { Chart } from "@antv/g2";
const data = [
  { year: "1951 年", sales: 38 },
  { year: "1952 年", sales: 52 },
  { year: "1956 年", sales: 61 },
  { year: "1957 年", sales: 145 },
  { year: "1958 年", sales: 48 },
  { year: "1959 年", sales: 38 },
  { year: "1960 年", sales: 38 },
  { year: "1962 年", sales: 38 },
];
export default {
  name: "TabLine",
  data() {
    return {};
  },

  components: {},

  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.chart = new Chart({
        container: "container",
        autoFit: true,
        height: 200,
      });

      this.chart.data(data);
      this.chart.scale("sales", {
        nice: true,
      });

      this.chart.tooltip({
        showMarkers: false,
      });
      this.chart.interaction("active-region");

      this.chart.interval().position("year*sales");
      this.chart.render();
    },
  },
};
</script>
<style>
</style>