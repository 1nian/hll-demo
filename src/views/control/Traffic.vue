<template>
  <div class="security-equipment">
    <hll-search
      @searchData="queryTableData"
      placeholder="请输入车牌号"
    ></hll-search>
    <hll-table
      :titleData="titleData"
      :tableData="filterTableData"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      @sizeChange="getSizeChange"
      @currentChange="getCurrentChange"
      :isOperation="true"
      :isEdit="false"
      :isDel="false"
      @seeDtaItem="getDtaItem"
    ></hll-table>
    <hll-dialog
      :isDialog="isDialog"
      title="详情查看"
      @closeDialog="closeDialog"
      :templateData="titleData"
      :templateInfo="tableItem"
    ></hll-dialog>
  </div>
</template>

<script>
import HllTable from "../../components/HllTable.vue";
import HllSearch from "../../components/HllSearch.vue";
import HllDialog from "../../components/HllDialog.vue";
import { getCatList } from "../../api/getData";
export default {
  name: "ControlTraffic",
  components: {
    HllTable,
    HllSearch,
    HllDialog,
  },
  data() {
    return {
      tableData: [],
      alwaysData: [],
      titleData: [
        { label: "违规车牌号", prop: "name" },
        { label: "违规类型", prop: "type" },
        { label: "地点", prop: "address" },
        { label: "日期", prop: "date" },
      ],
      currentPage: 0,
      pageSize: 10,
      total: 0,
      isDialog: false,
      tableItem: {},
    };
  },
  computed: {
    filterTableData() {
      return this.tableData.slice(
        this.currentPage,
        this.pageSize + this.currentPage
      );
    },
  },
  activated() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      const res = await getCatList();
      if (res.data.code === 200) {
        let newData = res.data.data.data;
        this.tableData = newData;
        this.alwaysData = newData;
        this.total = newData.length;
      }
    },
    getSizeChange(val) {
      if(this.total >= val){
        this.pageSize = val;
        this.currentPage = 1;
      }
    },
    getCurrentChange(val) {
      this.currentPage = val;
    },
    queryTableData(params) {
      let data = JSON.parse(JSON.stringify(this.alwaysData));

      if (params.valueInput != null) {
        this.tableData = data.filter((data) =>
          data.name.toLowerCase().includes(params.valueInput.toLowerCase())
        );
        this.total = this.tableData.length;
      } else {
        this.tableData = this.alwaysData;
        this.total = this.alwaysData.length;
      }
    },

    getDtaItem(item) {
      this.isDialog = true;
      this.tableItem = item;
    },
    closeDialog() {
      this.isDialog = false;
    },
  },
};
</script>

<style>
</style>