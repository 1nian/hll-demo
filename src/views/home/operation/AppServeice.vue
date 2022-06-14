<template>
  <div class="serve-card">
    <el-row>
      <el-col :span="12" class="serve-top">
        <div class="serve-left">
          <div>
            <p class="serve-code">{{ appTitle }}</p>
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
          <el-col :span="8" style="width: 100%">
            <el-row :gutter="20" style="margin-bottom:5px;margin-top:5px;">
              <el-col :span="12" style="padding-left:20px" class="tl"><span>调用次数: {{calls}}次</span></el-col>
              <el-col :span="12" style="padding-left:20px" class="tl"><span>数据流量: {{dataFlow}}GB</span></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-bottom:5px;">
              <el-col :span="12" style="padding-left:20px" class="tl"><span>异常访问次数: {{errCalls}}次</span></el-col>
              <el-col :span="12" style="padding-left:20px" class="tl"><span>访问频率: {{rate}}次/小时</span></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "AppServeice",
  props: {
    appTitle: {
      type: String,
    },
    status: {
      type: String,
    },
    calls: {
      type: Number,
    },
    dataFlow: {
      type: Number,
    },
    errCalls: {
      type: Number,
    },
    rate: {
      type: Number,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style>
</style>