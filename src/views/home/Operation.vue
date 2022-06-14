<template>
  <div>
    <el-row :gutter="20">
      <header-left :data="data" @setting="setting"></header-left>
      <el-col :span="12" class="item-card">
        <el-row :gutter="20" class="crad-header">
          <el-col :span="18" class="tl">平台运维情况分析</el-col>
          <el-col :span="6" class="tr">
            <span
              @click="changeLine('数据调取')"
              :class="[
                'header-label',
                { 'line-active': lineChange === '数据调取' },
              ]"
              >数据调取</span
            >
            |
            <span
              @click="changeLine('运营告警')"
              :class="[
                'header-label',
                { 'line-active': lineChange === '运营告警' },
              ]"
              >运营告警</span
            >
          </el-col>
        </el-row>
        <tab-line
          :data="chartList"
          :status1="color.status1"
          :status2="color.status2"
        ></tab-line>
      </el-col>
    </el-row>
    <div class="center">
      <el-row>
      <el-col :span="12">服务器运行情况</el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><ServerOperation></ServerOperation></el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import TabLine from "../../components/g2/line/TabLine.vue";
import HeaderLeft from "./operation/HeaderLeft.vue";
import ServerOperation from "./operation/Server.vue";
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
          icon: require("../../assets//images/icon-1.png"),
        },
        {
          id: 2,
          title: "应用服务",
          count: 8,
          isSure: 6,
          icon: require("../../assets//images/icon-2.png"),
        },
        {
          id: 3,
          title: "对接厂商",
          count: 5,
          isSure: 5,
          icon: require("../../assets//images/icon-3.png"),
        },
      ],
      chartList: [],
      color: {},
      lineChange: "数据调取",
    };
  },

  components: {
    TabLine,
    HeaderLeft,
    ServerOperation,
  },

  computed: {},

  mounted() {
    this.getChartList(this.lineChange);
  },

  methods: {
    getChartList(label) {
      let color1 = {
        status1: "rgb(84, 115, 232)",
        status2: "rgb(35, 188, 202)",
      };

      let data1 = [
        { date: "05-01", 数据调取: 100, 数据推送: 150 },
        { date: "05-06", 数据调取: 140, 数据推送: 110 },
        { date: "05-11", 数据调取: 230, 数据推送: 200 },
        { date: "05-16", 数据调取: 100, 数据推送: 140 },
        { date: "05-21", 数据调取: 130, 数据推送: 100 },
        { date: "05-26", 数据调取: 234, 数据推送: 134 },
        { date: "05-31", 数据调取: 170, 数据推送: 160 },
      ];

      let color2 = {
        status1: "rgb(255, 159, 36)",
        status2: "rgb(255, 94, 78)",
      };
      let data2 = [
        { date: "05-01", 数据调取: 85, 数据推送: 103 },
        { date: "05-06", 数据调取: 164, 数据推送: 90 },
        { date: "05-11", 数据调取: 230, 数据推送: 200 },
        { date: "05-16", 数据调取: 45, 数据推送: 67 },
        { date: "05-21", 数据调取: 130, 数据推送: 100 },
        { date: "05-26", 数据调取: 56, 数据推送: 134 },
        { date: "05-31", 数据调取: 100, 数据推送: 100 },
      ];

      if (label === "数据调取") {
        this.chartList = data1;
        this.color = color1;
      } else {
        this.chartList = data2;
        this.color = color2;
      }
    },

    setting() {
      console.log("1");
    },

    changeLine(label) {
      this.lineChange = label;
      this.getChartList(label);
    },
  },
};
</script>
<style>
.tl {
  text-align: left;
}
.tr {
  text-align: right;
}
.crad-header {
  margin-bottom: 10px;
  padding-right: 10px;
}
.header-label {
  cursor: pointer;
}
.line-active {
  color: #5473e8;
}
.center{
  background: #ffffff;
  margin-bottom: 10px;
}
</style>