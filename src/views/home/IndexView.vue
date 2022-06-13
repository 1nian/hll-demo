<template>
  <el-tabs v-model="activeName" class="index-view" style="">
    <el-tab-pane label="业务分析" name="first">
      <tab-business></tab-business>
    </el-tab-pane>
    <el-tab-pane label="数据分析" name="second">
      <tab-data></tab-data>
    </el-tab-pane>
    <el-tab-pane label="平台运维" name="third">
      <tab-operation></tab-operation>
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
      activeName: "third",
    };
  },
  components: {
    TabBusiness,
    TabData,
    TabOperation,
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
.index-view {
  background: #f3f4f7;
  padding: 10px 10px 0;
}
.index-view .el-tabs__nav-scroll {
  background: #ffffff;
  padding: 0 10px 10px;
  box-sizing: border-box;
}
</style>