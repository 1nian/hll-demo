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
    text:{
      type:String
    }
  },
  data() {
    return {
      chart:null,
      color:null
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
       this.chart = new Chart({
        container: this.idName,
        autoFit: true,
        height: 150,
      });
      this.chart.data(this.data)

      this.chart.facet('rect',{
        fields:['y'],
        eachView:(view,facet)=>{
          let xVal = facet.data[0].y;
          if(xVal >= 0.74 && xVal < 0.90){
            this.color = '#ff9f24'
          }else if(xVal >= 0.90){
            this.color = '#ff5e4e'
          } else if(xVal <= 0.74){
            this.color = '#5473e8'
          }
          facet.data.push({ y: (1 - xVal).toFixed(2) * 1 });
          view.data(facet.data);
          
          view.coordinate("theta", {
            radius: 1,
            innerRadius: 0.8,
          });
          
          // 辅助文本
          view
            .annotation()
            .text({
              position: ["50%", "50%"],
              content: `${xVal * 100}%`,
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
                fontSize: 12,
                fill: "#8c8c8c",
                textAlign: "center",
              },
              offsetX: 0,
              offsetY: 20,
            })
            
          view
            .interval()
            .adjust("stack")
            .position("y")
            .color('y',[this.color,'#eceef1'])

          view.interaction("element-active");
        }
      })

      

      this.chart.render();
    },
  },
};
</script>
<style>
</style>