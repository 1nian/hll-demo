<template>
  <div>
    <hll-search :isSelect="true" :optionSelect="optionSelect" @searchData="getQuery"></hll-search>
  </div>
</template>

<script>
import HllSearch from "../../components/HllSearch.vue";
export default {
    name:"ControlVisitor",
  data() {
    return {
      optionSelect: [
        { label: "进入", prop: 1 },
        { label: "离开", prop: 2 },
      ],
    };
  },
  components: {
    HllSearch,
  },
  methods:{
      getQuery(params){
          console.log(params);
      }
  }
};
</script>

<style>
</style>