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
import {getList} from '../../api/getData'
export default {
  name: "SecurityEquipment",
  components:{
    HllTable
  },
  data() {
    return {
      tableData: [],
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
  mounted(){
    this.getTableData()
  },
  methods:{
    async getTableData(){
      const res = await getList();
      if(res.data.code === 200){
        this.tableData = res.data.data.data
      }
    },
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