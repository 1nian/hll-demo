<template>
  <div class="hll-search">
    <el-select class="hll-search-select" v-model="valueSelect" :placeholder="placeholderSelect" v-if="isSelect">
      <el-option
        v-for="(item, index) in optionSelect"
        :key="index"
        :label="item.label"
        :value="item.prop"
      >
      </el-option>
    </el-select>
    <el-input
      class="hll-search-input"
      v-model="valueInput"
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
    isSelect: {
      type: Boolean,
      default: false,
    },
    placeholderSelect:{
      type: String,
      default: "选择文本框",
    },
    optionSelect: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      valueInput: "",
      valueSelect: this.optionSelect[0].label,
      isClear: false,
    };
  },
  methods: {
    serach() {
      let params = {}
      if (this.valueInput || this.valueSelect) {
        this.isClear = true;
        params['valueInput'] = this.valueInput;
        params['valueSelect'] = this.valueSelect;
        this.$emit("searchData", params);
      }
    },
    clear() {
      this.valueInput = "";
      this.valueSelect = this.optionSelect[0].label,
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
.hll-search-select{
  width: 160px;
  margin-right: 10px;
}
</style>