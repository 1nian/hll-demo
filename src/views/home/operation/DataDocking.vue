<template>
  <div class="serve-card">
    <el-row>
      <el-col :span="12" class="serve-top">
        <div class="serve-left">
          <div>
            <p class="serve-code">{{ dataDockingTitle }}</p>
            <p class="serve-ip">厂商ID：{{ dataDockingId }}</p>
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
              <el-col :span="12" style="padding-left:20px" class="tl"><span>调取次数: {{calls}}次</span></el-col>
              <el-col :span="12" style="padding-left:20px" class="tl"><span>数据流量: {{dataFlow}}GB</span></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-bottom:5px;">
              <el-col :span="12" style="padding-left:20px" class="tl"><span>负责人: {{name}}</span></el-col>
              <el-col :span="12" style="padding-left:20px" class="tl"><span>电话: {{phone}}</span></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "DataDocking",
  props: {
    dataDockingTitle: {
      type: String,
    },
    dataDockingId: {
      type: String,
    },
    status: {
      type: String,
    },
    name: {
      type: String,
    },
    calls: {
      type: Number,
    },
    dataFlow: {
      type: Number,
    },
    phone: {
      type: String,
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