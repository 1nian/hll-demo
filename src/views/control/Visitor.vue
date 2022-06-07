<template>
  <div class="security-equipment">
    <hll-search
      @searchData="queryTableData"
      placeholder="请输入访客姓名"
      :isSelect="true"
      :isDatePicker="true"
      :optionSelect="optionSelect"
    ></hll-search>
    <hll-table
      :titleData="filterTitleData"
      :tableData="filterTableData"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      :isImg="true"
      :isOperation="true"
      :isEdit="false"
      :isDel="false"
      @sizeChange="getSizeChange"
      @currentChange="getCurrentChange"
      @seeDtaItem="getDataItem"
    ></hll-table>

    <hll-dialog
      :item="tableItem"
      :isDialog="isDialog"
      :dialogInfo="dialogInfo"
      @closeDialog="closeDialog"
      :templateData="filterTitleData"
      :templateInfo="tableItem"
    ></hll-dialog>
  </div>
</template>

<script>
import HllTable from "../../components/HllTable.vue";
import HllSearch from "../../components/HllSearch.vue";
import HllDialog from "../../components/HllDialog.vue";
import { getVisitorList } from "../../api/getData";
export default {
  name: "SecurityEquipment",
  components: {
    HllTable,
    HllSearch,
    HllDialog,
  },
  data() {
    return {
      tableData: [],
      alwaysData: [],
      optionSelect: [
        { label: "进入", prop: "进入" },
        { label: "离开", prop: "离开" },
      ],
      titleData: [
        { label: "访客姓名", prop: "visitorName", isShow: true },
        { label: "图片", prop: "img", isShow: false },
        { label: "是否自驾", prop: "isDriving", isShow: true },
        { label: "访客电话", prop: "visitorPhone", isShow: true },
        { label: "进出入状态", prop: "status", isShow: true },
        { label: "被访人姓名", prop: "spinsterName", isShow: true },
        { label: "通行时间", prop: "date", isShow: true },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableItem: {},
      isDialog: false,
      dialogInfo: "",
    };
  },
  computed: {
    filterTableData() {
      let data = this.tableData;
      return data.slice(
        (this.currentPage - 1) * this.pageSize,
        this.pageSize * this.currentPage
      );
    },
    filterTitleData() {
      let data = this.titleData.filter((item) => item.isShow === true);
      return data;
    },
  },
  activated() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      const res = await getVisitorList();
      let sortData = res.data.data.data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      if (res.data.code === 200) {
        this.tableData = sortData;
        this.alwaysData = sortData;
        this.total = sortData.length;
      }
    },
    getSizeChange(val) {
      if (this.total >= val) {
        this.pageSize = val;
        this.currentPage = 1;
      }
    },
    getCurrentChange(val) {
      this.currentPage = val;
    },

    // 筛选表格数据
    queryTableData(params) {
      let data = JSON.parse(JSON.stringify(this.alwaysData));
      let selectData,
        datetData,
        resData = [];

      if (params.valueInput != null) {
        selectData = data.filter((data) =>
          data.status.toLowerCase().includes(params.valueSelect.toLowerCase())
        );

        if (params.valueDate != null) {
          datetData = selectData.filter(
            (data) => new Date(data.date) === new Date(params.valueDate)
          );
        }

        resData =
          datetData ||
          selectData.filter((data) =>
            data.visitorName
              .toLowerCase()
              .includes(params.valueInput.toLowerCase())
          );

        this.tableData = resData;
        this.total = resData.length;
      } else {
        this.tableData = this.alwaysData;
        this.total = this.alwaysData.length;
      }
    },

    getDataItem(item) {
      this.tableItem = item;
      this.isDialog = true;
    },

    closeDialog() {
      this.isDialog = false;
    },
  },
};
</script>

<style>
</style>