<template>
  <div class="security-equipment">
    <hll-search
      @searchData="queryTableData"
      @addTableData="operationalTableData"
      placeholder="请输入访客姓名"
      :isSelect="true"
      :isDatePicker="true"
      :isAdd="true"
      :optionSelect="optionSelect"
    ></hll-search>
    <hll-table
      :titleData="filterTitleData"
      :tableData="filterTableData"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      :isOperation="true"
      :cellStyle="cellStyle"
      @sizeChange="getSizeChange"
      @currentChange="getCurrentChange"
      @seeDtaItem="getDataItem"
      @editDataItem="operationalTableData"
      @delDataItem="delDataItem"
    >
      <!-- 设置图片 -->
      <template slot="img">
        <el-table-column label="图片" align="center">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              width="200"
              trigger="hover"
              effect="dark"
            >
              <div><img :src="scope.row.img" alt="" /></div>
              <img
                slot="reference"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                alt=""
                style="width: 30px; height: 30px"
              />
            </el-popover>
          </template>
        </el-table-column>
      </template>
    </hll-table>
    <hll-dialog
      :title="title"
      :isDialog="isDialog"
      :isSeeDetails="isSeeDetails"
      :isOperationalData="isOperationalData"
      @closeDialog="closeDialog"
      @info="updateInfo"
      :templateData="filterTitleData"
      :templateInfo="tableItem"
      :isButton="isButton"
      ref="hllDialog"
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
        { label: "图片", prop: "img", isShow: true, __slotName: "img" },
        { label: "是否自驾", prop: "isDriving", isShow: true },
        {
          label: "访客电话",
          prop: "visitorPhone",
          isShow: true,
        },
        { label: "进出入状态", prop: "status", isShow: true },
        { label: "被访人姓名", prop: "spinsterName", isShow: true },
        { label: "通行时间", prop: "date", isShow: true },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableItem: {},
      isDialog: false,
      isSeeDetails: false,
      isOperationalData: false,
      isButton: false,
      isDel: false,
      dialogInfo: "",
      title: "",
    };
  },
  computed: {
    filterTableData() {
      let data = this.$store.state.mockData;
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
    this.alwaysData = JSON.parse(sessionStorage.getItem("mockData"));
    if (this.alwaysData) {
      this.$store.commit("setMockData", this.alwaysData);
      this.total = this.$store.state.mockData.length;
    } else {
      this.getTableData();
    }
  },
  methods: {
    async getTableData() {
      const res = await getVisitorList();
      let sortData = res.data.data.data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      if (res.data.code === 200) {
        sessionStorage.setItem("mockData", JSON.stringify(sortData));

        this.tableData = sortData;
        this.alwaysData = sortData;
        this.total = sortData.length;
      }
    },
    getSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    getCurrentChange(val) {
      this.currentPage = val;
    },

    // 筛选表格数据
    queryTableData(params) {
      let goobleData = JSON.parse(JSON.stringify(this.alwaysData));
      if (params.status === "search") {
        let data = goobleData.filter((item) => {
          return (
            item.status === params.valueSelect &&
            item.visitorName === params.valueInput &&
            item.date === params.valueDate
          );
        });
        this.$store.state.mockData = data;
        this.total = data.length;
      }

      if (params.status === "reset") {
        this.$store.state.mockData = this.alwaysData;
        this.total = this.alwaysData.length;
      }
    },

    // dialog 查看数据详情
    getDataItem(item) {
      this.tableItem = item;
      this.isDialog = true;
      this.isSeeDetails = true;
      this.isOperationalData = false;
      this.isButton = false;
      this.title = "详情查看";
    },

    closeDialog() {
      this.isDialog = false;
    },

    // dialog 操作表格数据
    operationalTableData(item) {
      this.isDialog = true;
      this.isOperationalData = true;
      this.isButton = true;
      this.isSeeDetails = false;
      this.title = item ? "编辑" : "添加";
      this.tableItem = item ? item : {};

      this.$refs.hllDialog.filterTableInfo(this.tableItem.id);
    },

    // 更新表格数据
    updateInfo(item) {
      let data = this.$store.state.mockData;
      if (item.id) {
        let index = data.findIndex((i) => i.id === item.id);
        data.splice(index, 1, item);
      } else {
        let id = new Date().getTime();
        item["id"] = id;
        let params = Object.assign({}, item);
        data.push(params);
      }
      this.total = data.length;
      this.alwaysData = data;

      this.closeDialog();
    },

    // 删除表格数据
    delDataItem(item) {
      let data = this.alwaysData;
      let index = data.findIndex((i) => i.id === item.id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          data.splice(index, 1);
          this.total = data.length;
          this.$store.state.mockData = data;
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    cellStyle(rows){
      console.log(rows);
      if(rows.column.label === '进出入状态' && rows.row.status === '进入'){
        this.isDel = true
        return 'color:#ff6700'
      }
      if(rows.column.label === '进出入状态' && rows.row.status === '离开'){
        this.isDel = false
        return 'color:#5473e8'
      }
    }
  },
};
</script>

<style>
</style>