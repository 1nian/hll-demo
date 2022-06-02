<template>
  <div class="security-equipment">
    <hll-search></hll-search>
    <hll-table :titleData="titleData" :tableData="filterTableData"
    :currentPage="currentPage" :pageSize="pageSize" :total="total"
    @sizeChange="getSizeChange" @currentChange="getCurrentChange"
    ></hll-table>
  </div>
</template>

<script>
import HllTable from '../../components/HllTable.vue'
import HllSearch from '../../components/HllSearch.vue'
import {getList} from '../../api/getData'
export default {
  name: "SecurityEquipment",
  components:{
    HllTable,
    HllSearch
  },
  data() {
    return {
      tableData: [],
      titleData: [
        { label: "名称", prop: "name" },
        { label: "日期", prop: "date" },
        { label: "地址", prop: "address" },
      ],
      currentPage:0,
      pageSize:10,
      total:0,
    };
  },
  computed:{
    filterTableData(){
      return this.tableData.slice(this.currentPage,(this.pageSize+this.currentPage))
    }
  },
  mounted(){
    this.getTableData()
  },
  methods:{
    async getTableData(){
      const res = await getList();
      if(res.data.code === 200){
        this.tableData = res.data.data.data
        this.total = res.data.total
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