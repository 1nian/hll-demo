<template>
  <div>
    <!-- 顶部模块 -->
    <el-row :gutter="20">
      <header-left :data="data" @setting="setting"></header-left>
      <el-col :span="12" class="item-card">
        <el-row :gutter="20" class="crad-header">
          <el-col :span="18" class="tl">平台运维情况分析</el-col>
          <el-col :span="6" class="tr">
            <span
              @click="changeLine('get')"
              :class="['header-label', { 'line-active': lineChange === 'get' }]"
              >数据调取</span
            >
            |
            <span
              @click="changeLine('push')"
              :class="[
                'header-label',
                { 'line-active': lineChange === 'push' },
              ]"
              >运营告警</span
            >
          </el-col>
        </el-row>
        <tab-line :data="chartList" :colors="colors"></tab-line>
      </el-col>
    </el-row>

    <!-- 服务器运行情况 -->
    <div class="center">
      <el-collapse v-model="activeServerNames" @change="handleChange('server')">
        <el-collapse-item name="1">
          <template slot="title">
            <el-row :gutter="20" style="width: 100%">
              <el-col
                :span="12"
                class="tl center-title"
                style="padding-left: 30px"
                >服务器运行情况</el-col
              >
              <el-col :span="12" class="tr center-text"
                >{{ serverLabel }} ({{ serverData.length }})</el-col
              >
            </el-row>
          </template>
          <div class="center-card">
            <div
              class="center-card-item"
              v-for="item in serverData"
              :key="item.id"
            >
              <server-operation
                :code="item.id"
                :serveIp="item.ip"
                :status="item.status"
                :interval="item.interval"
              ></server-operation>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- 应用服务运行情况 -->
    <div class="center">
      <el-collapse v-model="appServerNames" @change="handleChange('app')">
        <el-collapse-item name="1">
          <template slot="title">
            <el-row :gutter="20" style="width: 100%">
              <el-col
                :span="12"
                class="tl center-title"
                style="padding-left: 30px"
                >应用服务运行情况</el-col
              >
              <el-col :span="12" class="tr center-text"
                >{{ appLabel }} ({{ appData.length }})</el-col
              >
            </el-row>
          </template>
          <div class="center-card">
            <div
              class="center-card-item"
              v-for="app in appData"
              :key="'app' + app.id"
            >
              <app-serveice
                appTitle="智慧园区IOC运营中心"
                :calls="app.calls"
                :dataFlow="app.dataFlow"
                :errCalls="app.errCalls"
                :rate="app.rate"
                :status="app.status"
              ></app-serveice>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- 数据对接厂商运行情况 -->
    <div class="center">
      <el-collapse v-model="dataDockingNames" @change="handleChange('docking')">
        <el-collapse-item name="1">
          <template slot="title">
            <el-row :gutter="20" style="width: 100%">
              <el-col
                :span="12"
                class="tl center-title"
                style="padding-left: 30px"
                >数据对接厂商运行情况</el-col
              >
              <el-col :span="12" class="tr center-text"
                >{{ dockingLabel }} ({{ dataDocking.length }})</el-col
              >
            </el-row>
          </template>
          <div class="center-card">
            <div
              class="center-card-item"
              v-for="docking in dataDocking"
              :key="'docking' + docking.id"
            >
              <data-docking
                dataDockingTitle="ROMA"
                :dataDockingId="docking.dataDockingId"
                :status="docking.status"
                :calls="docking.calls"
                :dataFlow="docking.dataFlow"
                :name="docking.name"
                :phone="docking.phone"
              ></data-docking>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import TabLine from "../../components/g2/line/TabLine.vue";
import HeaderLeft from "./operation/HeaderLeft.vue";
import ServerOperation from "./operation/Server.vue";
import AppServeice from "./operation/AppServeice.vue";
import DataDocking from "./operation/DataDocking.vue";
import {
  getChartList,
  getChartListV2,
  getServerData,
  getAppServiceData,
  getDataDocking,
} from "../../api/getData";
export default {
  name: "TabOperation",
  data() {
    return {
      activeServerNames: ["1"],
      appServerNames: ["1"],
      dataDockingNames: ["1"],
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
      colors: ["rgb(84, 115, 232)", "rgb(35, 188, 202)"],
      lineChange: "get",
      serverLabel: "收起",
      appLabel: "收起",
      dockingLabel: "收起",
      serverData: [],
      appData: [],
      dataDocking: [],
    };
  },

  components: {
    TabLine,
    HeaderLeft,
    ServerOperation,
    AppServeice,
    DataDocking,
  },

  computed: {},

  mounted() {
     let data = JSON.parse(sessionStorage.getItem(`${this.lineChange}_data`)) ;
     if(!(data && data.length > 0)){
       this.getChartList(this.lineChange);
     }
     this.chartList = data;
    this.getServerData();
    this.getAppServiceData();
    this.getDataDocking();
  },

  methods: {
    // 运维通知设置
    setting() {
      console.log("1");
    },

    // 获取折线图数据
    async getChartList(label) {
      if (label === "get") {
        let res = await getChartList();
        let dataList = res.data.data;
        let dateList = res.data.date;
        this.setChatrList(dataList[0], dateList);
      }

      if (label === "push") {
        let res = await getChartListV2();
        let dataList = res.data.data;
        let dateList = res.data.date;
        this.setChatrList(dataList[0], dateList);
      }
    },

    // 折线图数据源切换
    changeLine(label) {
      this.lineChange = label;

      let colors = label === 'get' ? colors = ["rgb(84, 115, 232)", "rgb(35, 188, 202)"] : colors = ["rgb(255, 159, 36)", "rgb(255, 94, 78)"];

      // 获取折线图数据
      let data = JSON.parse(sessionStorage.getItem(`${label}_data`)) ;
      
      if (data && data.length > 0) {
        this.chartList = data;
        this.colors = colors
      } else {
        this.getChartList(label);
      }
    },

    // 生成最终的 chatrList
    setChatrList({ dataGet, dataPush }, dateList) {
      let data_1 = this.newArray(dataGet, dateList);
      let data_2 = this.newArray(dataPush, dateList);
      let data = data_1.concat(data_2);
      this.chartList = data.slice().reverse();
      // 数据折线图存储
      sessionStorage.setItem(`${this.lineChange}_data`, JSON.stringify(data.slice().reverse()));
    },

    // 数组合并
    newArray(data1, data2) {
      let data = [];
      data = data1.map((data1) => {
        let info = data2.find((data2) => data1.id === data2.id);
        return {
          ...data1,
          ...info,
        };
      });
      return data;
    },

    // 折叠面板展开与收起
    handleChange(val) {
      if (val === "server") {
        this.serverLabel === "收起"
          ? (this.serverLabel = "展开")
          : (this.serverLabel = "收起");
      }
      if (val === "app") {
        this.appLabel === "收起"
          ? (this.appLabel = "展开")
          : (this.appLabel = "收起");
      }
      if (val === "docking") {
        this.dockingLabel === "收起"
          ? (this.dockingLabel = "展开")
          : (this.dockingLabel = "收起");
      }
    },

    // 获取服务器运行情况数据
    async getServerData() {
      let res = await getServerData();
      let data = res.data.data.data;
      this.serverData = data;
    },

    // 获取应用服务运行情况数据
    async getAppServiceData() {
      let res = await getAppServiceData();
      let data = res.data.data.data;
      this.appData = data;
    },

    // 获取应用服务运行情况数据
    async getDataDocking() {
      let res = await getDataDocking();
      let data = res.data.data.data;
      this.dataDocking = data;
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
.center {
  background: #ffffff;
  margin-bottom: 10px;
}
.center-title {
  font-size: 16px;
  font-weight: 700;
  color: #222222;
}
.center-text {
  font-weight: 400;
  font-size: 14px;
  color: rgb(84, 115, 232);
}
.center-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.center-card-item {
  width: 411px;
  margin-left: 20px;
  border: 1px solid rgb(233, 236, 247);
  margin-bottom: 20px;
}
.serve-top {
  width: 100%;
  background: rgb(245, 247, 253);
  border-color: rgb(233, 236, 247);
  border-width: 1px;
  border-style: solid;
}
.serve-left {
  padding: 10px;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.serve-code {
  font-size: 14px;
  color: #222222;
  font-weight: 700;
}
.serve-ip {
  font-size: 14px;
  color: #555555;
}
</style>