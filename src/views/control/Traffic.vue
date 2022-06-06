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
      :titleData="titleData"
      :item="TableItem"
      :dialogInfo="dialogInfo"
      @closeDialog="closeDialog"
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
      TableItem: {},
      dialogInfo: "",
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
      this.pageSize = val;
      this.currentPage = 1;
    },
    getCurrentChange(val) {
      this.currentPage = val;
    },
    queryTableData(item) {
      let data = JSON.parse(JSON.stringify(this.alwaysData));

      if (item) {
        this.tableData = data.filter((data) =>
          data.name.toLowerCase().includes(item.toLowerCase())
        );
        this.total = this.tableData.length;
      } else {
        this.tableData = this.alwaysData;
        this.total = this.alwaysData.length;
      }
    },

    getDtaItem(item) {
      this.isDialog = true;
      this.TableItem = item;

      let dialogHtml = `
        <el-row class="el-row">
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple-dark">违规信息</div></el-col>
        </el-row>
        <el-row class="el-row">
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple">车牌号码</div></el-col>
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple-light">${item.name}</div></el-col>
        </el-row>
        <el-row class="el-row">
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple">违规时间</div></el-col>
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple-light">${item.date}</div></el-col>
        </el-row>
        <el-row class="el-row">
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple">违规地点</div></el-col>
          <el-col class="el-col el-col-12"><div class="grid-content bg-purple-light">${item.address}</div></el-col>
        </el-row>
        <el-row class="el-row">
          <el-col class="el-col el-col-12"iv class="grid-content bg-purple">图片</div></el-col>
          <el-col class="el-col el-col-12"iv class="grid-content bg-purple-light"><img src="${item.img}"></div></el-col>
        </el-row>
      `;
      this.dialogInfo = dialogHtml;
    },
    closeDialog() {
      this.isDialog = false;
    },
  },
};
</script>

<style>
</style>