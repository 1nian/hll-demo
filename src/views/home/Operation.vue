<template>
  <div>
    <el-row :gutter="20">
      <header-left :data="data" @setting="setting"></header-left>
      <tab-line></tab-line>
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
    };
  },

  components: {
    TabLine,
    HeaderLeft,
  },

  computed: {},

  methods: {
    setting() {
      console.log("1");
    },
  },
};
</script>
<style>
</style>