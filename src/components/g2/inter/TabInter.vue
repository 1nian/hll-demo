<template>
  <div :id="idName"></div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  name: "TabInter",
  props: {
    idName: {
      type: String,
      default: "interval",
    },
    data: {
      type: Array,
      default: () => [],
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      chart: null,
      color: null,
    };
  },

  components: {},

  watch: {
    data() {
      // this.changeInitChart();
    },
  },

  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      this.setColor()
      let data = this.data;
      data.push({
        item: "未使用",
        percent: +((1 - data[0].percent) * 1).toFixed(2),
      });

      this.chart = new Chart({
        container: this.idName,
        autoFit: true,
        height: 150,
        defaultInteractions: ['tooltip'], // 仅保留 tooltip
      });

      this.chart.data(data);

      this.chart.tooltip(false); // 关闭 tooltip

      this.chart.legend(false); // 关闭图例

      this.chart.scale("percent", {
        formatter: (val) => {
          val = (val * 100).toFixed(2) + "%";
          return val;
        },
      });
      this.chart.coordinate("theta", {
        radius: 0.9,
        innerRadius: 0.75,
      });

      // 辅助文本
      this.chart
        .annotation()
        .text({
          position: ["50%", "50%"],
          content: `${(this.data[0].percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 20,
            fill: "#8c8c8c",
            textAlign: "center",
          },
          offsetY: -10,
        })
        .text({
          position: ["50%", "50%"],
          content: this.text,
          style: {
            fontSize: 14,
            fill: "#8c8c8c",
            textAlign: "center",
          },
          offsetY: 10,
        });
      this.chart
        .interval()
        .adjust("stack")
        .position("percent")
        .color("item", [this.color, "#e9ecf7"]);

      this.chart.removeInteraction("element-active");

      this.chart.render();
    },

    setColor() {
      let xVal = this.data[0].percent;
      if (xVal >= 0.75 && xVal < 0.9) {
        this.color = "#ff9f24";
      } else if (xVal >= 0.9) {
        this.color = "#ff5e4e";
      } else if (xVal < 0.75) {
        this.color = "#5473e8";
      }
    },

    changeInitChart() {
      let data = this.data;
      data.push({
        item: "未使用",
        percent: +((1 - data[0].percent) * 1).toFixed(2),
      });
      this.chart.changeData(data);
    },
  },
};
</script>
<style>
</style>