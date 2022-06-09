<template>
  <div>
    <el-row :gutter="20">
      <header-left :data="data" @setting="setting"></header-left>
      <tab-line :data="chartList" style="height: 240px"></tab-line>
    </el-row>
  </div>
</template>

<script>
import TabLine from "../../components/g2/line/TabLine.vue";
import HeaderLeft from "./operation/HeaderLeft.vue";
export default {
  name: "TabOperation",
  data() {
    return {
      data: [
        {
          id: 1,
          title: "服务器",
          count: 6,
          isSure: 6,
          icon: require("../../assets/index/icon-1.png"),
        },
        {
          id: 2,
          title: "应用服务",
          count: 8,
          isSure: 6,
          icon: require("../../assets/index/icon-2.png"),
        },
        {
          id: 3,
          title: "对接厂商",
          count: 5,
          isSure: 5,
          icon: require("../../assets/index/icon-3.png"),
        },
      ],
      chartList: [],
    };
  },

  components: {
    TabLine,
    HeaderLeft,
  },

  computed: {},

  mounted() {
    this.getChartList();
  },

  methods: {
    getChartList() {
      this.chartList = [
        {date:'05-01','数据调取':100,'数据推送':150},
        {date:'05-06','数据调取':140,'数据推送':110},
        {date:'05-11','数据调取':230,'数据推送':200},
        {date:'05-16','数据调取':100,'数据推送':140},
        {date:'05-21','数据调取':130,'数据推送':100},
        {date:'05-26','数据调取':234,'数据推送':134},
        {date:'05-31','数据调取':170,'数据推送':160},
      ]
    },

    setting() {
      console.log("1");
    },
  },
};
</script>
<style>
</style>