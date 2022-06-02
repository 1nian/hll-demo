<template>
  <div class="security-equipment">
    <hll-table :titleData="titleData" :tableData="tableData"
    :currentPage="currentPage" :pageSize="pageSize" :total="total"
    @sizeChange="getSizeChange" @currentChange="getCurrentChange"
    ></hll-table>
  </div>
</template>

<script>
import HllTable from '../../components/HllTable.vue'
export default {
  name: "SecurityEquipment",
  components:{
    HllTable
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      titleData: [
        { label: "名称", prop: "name" },
        { label: "日期", prop: "date" },
        { label: "地址", prop: "address" },
      ],
      currentPage:1,
      pageSize:10,
      total:100,
    };
  },
  methods:{
    getSizeChange(val){
      this.pageSize = val;
      this.currentPage = 1;
    },
    getCurrentChange(val){
      this.currentPage = val;
    },
  }
};
</script>

<style>
</style>