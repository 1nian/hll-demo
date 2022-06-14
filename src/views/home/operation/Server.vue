<template>
  <div class="serve-card">
    <el-row>
      <el-col :span="12" class="serve-top">
        <div class="serve-left">
          <div>
            <p class="serve-code">HHL{{ code }}</p>
            <p class="serve-ip">服务器地址：{{ serveIp }}</p>
          </div>
          <div>
            <span :class="['item-border', 'mr5', 'border-danger',{
              'border-success' : status === '可用'
            }]"></span>
            <span class="item-f-text">{{status}}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12" style="width: 100%">
        <el-row>
          <el-col :span="8"
            ><TabInter
              :idName="code + 'inter-1'"
              :data="interval.cpu"
              text="CPU占用率"
            ></TabInter
          ></el-col>
          <el-col :span="8"
            ><TabInter
              :idName="code + 'inter-2'"
              :data="interval.memory"
              text="内存占用率"
            ></TabInter
          ></el-col>
          <el-col :span="8"
            ><TabInter
              :idName="code + 'inter-3'"
              :data="interval.storage"
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
  props: {
    code: {
      type: Number,
    },
    serveIp: {
      type: String,
    },
    status: {
      type: String,
    },
    interval:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {};
  },

  components: {
    TabInter,
  },

  methods: {},
};
</script>
<style>
</style>