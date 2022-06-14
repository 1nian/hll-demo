<template>
  <div class="serve-card">
    <el-row>
      <el-col :span="12" class="serve-top">
        <div class="serve-left">
          <p>HHL001</p>
          <p>服务器地址：192.168.0.1</p>
        </div>
      </el-col>
      <el-col :span="12" style="width:100%;">
        <el-row>
          <el-col :span="8"
            ><TabInter
              idName="inter-1"
              :data="[{ y: 0.62 }]"
              text="CPU占用率"
            ></TabInter
          ></el-col>
          <el-col :span="8"
            ><TabInter
              idName="inter-2"
              :data="[{ y: 0.78 }]"
              text="内存占用率"
            ></TabInter
          ></el-col>
          <el-col :span="8"
            ><TabInter
              idName="inter-3"
              :data="[{ y: 0.90 }]"
              text="存储占用率"
            ></TabInter
          ></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TabInter from "../../../components/g2/inter/TabInter.vue";
export default {
  name: "ServerOperation",
  data() {
    return {};
  },

  components: {
    TabInter,
  },

  computed: {},

  methods: {},
};
</script>
<style>
.serve-top {
  width: 100%;
  height: 60px;
  background: rgb(245, 247, 253);
  border-color: rgb(233, 236, 247);
  border-width: 1px;
  border-style: solid;
  margin: 10px;
}
.serve-left {
  padding: 10px;
  text-align: left;
  box-sizing: border-box;
}
</style>