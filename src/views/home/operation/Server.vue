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
            <span class="item-border border-success mr5"></span>
            <span class="item-f-text">可用</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12" style="width: 100%">
        <el-row>
          <el-col :span="8"
            ><TabInter
              :idName="code + 'inter-1'"
              :data="[{ item: '已占用', percent: 0.62 }]"
              text="CPU占用率"
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
      type: String,
    },
    serveIp: {
      type: String,
    },
  },
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
</style>