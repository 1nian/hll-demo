<template>
  <div>
    <el-page-header @back="goBack" :content="this.$store.state.operationInfo.content"> </el-page-header>
    {{this.$store.state.operationInfo}}
  </div>
</template>

<script>
export default {
  name: "TrafficOperation",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    goBack() {
      this.$router.push({ name: "ControlTraffic" });
    },
  },
};
</script>
<style>
</style>