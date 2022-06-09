<template>
  <el-tabs v-model="activeName" class="index-view" style="background: #f3f4f7;padding-left:10px">
    <el-tab-pane
      v-for="(item, index) in tabs"
      :key="index"
      :label="item.label"
      :name="item.name"
    >
      <component :is="componentName"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TabBusiness from "./BusinessAnalysis.vue";
import TabOperation from "./Operation.vue";
import TabData from "./DataAnalysis.vue";
export default {
  name: "IndexView",
  data() {
    return {
      tabs: [
        { id: 1, label: "业务分析", name: "first" },
        { id: 2, label: "数据分析", name: "second" },
        { id: 3, label: "平台运维", name: "third" },
      ],
      activeName: "third",
      components: [
        {id:1,name:'Business'},
        {id:2,name:'Data'},
        {id:3,name:'Operation'},
      ],
    };
  },
  components: {
    TabBusiness,
    TabData,
    TabOperation,
  },
  computed: {
    componentName() {
      let tabInfo = this.tabs.find((item) => item.name === this.activeName);
      let componentInfo = this.components.find(item => item.id === tabInfo.id)
      return 'tab-' + componentInfo.name.toLowerCase()
    },
  },
};
</script>

<style>
.index-block {
  width: 100%;
  height: 100%;
  background-image: url("../..//assets/index-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.index-view .el-tabs__nav-scroll{
  background: #ffffff;
  padding: 0 10px 10px;
  box-sizing: border-box;
}
</style>