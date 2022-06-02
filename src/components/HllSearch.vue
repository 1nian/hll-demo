<template>
  <div class="hll-search">
    <el-input class="hll-search-input" v-model="input" :placeholder="placeholder"></el-input>
    <el-button class="hll-el-button">主要按钮</el-button>
    <el-button>重置</el-button>
  </div>
</template>

<script>
export default {
  props:{
    // 搜索条件
    placeholder:{
      type:String,
      default:'搜索文本框'
    }
  },
  data(){
    return {
      input:''
    }
  }
};
</script>

<style>
.hll-search{
  display: flex;
}
.hll-search-input{
  width: 260px;
  margin-right: 10px;
}
</style>