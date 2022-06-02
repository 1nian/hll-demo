<template>
  <div class="hll-search">
    <el-input
      class="hll-search-input"
      v-model="value"
      :placeholder="placeholder"
    ></el-input>
    <el-button class="hll-el-button hll-search-button" @click="serach"
      >搜索</el-button
    >
    <el-button v-show="isClear" class="hll-search-button" @click="clear"
      >重置</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    // 搜索条件
    placeholder: {
      type: String,
      default: "搜索文本框",
    },
  },
  data() {
    return {
      value: "",
      isClear: false,
    };
  },
  methods: {
    serach() {
      if (this.value) {
        this.isClear = true;
        this.$emit("searchData", this.value);
      }
    },
    clear() {
      this.value = "";
      this.isClear = false;
      this.$emit("searchData", null);
    },
  },
};
</script>

<style>
.hll-search {
  display: flex;
}
.hll-search-input {
  width: 260px;
  margin-right: 10px;
}
.hll-search-button {
  width: 88px;
}
</style>