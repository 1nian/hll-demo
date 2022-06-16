<template>
  <div>
    <el-dialog
      :title="title"
      :visible="isDialog"
      width="498px"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :destroy-on-close="true"
    >
      <div v-if="isSeeDetails">
        <el-row
          :gutter="24"
          v-for="(item, index) in templateData"
          :key="index"
          :templateInfo="templateInfo"
        >
          <el-col :span="8">
            <div class="grid-content bg-purple text-rigth">
              {{ item.label }}
            </div>
          </el-col>
          <el-col :span="16">
            <template v-if="!item.__slotName">
              <div class="grid-content bg-purple-light text-left">
                {{ templateInfo[item.prop] }}
              </div>
            </template>
            <template v-if="item.__slotName">
              <div class="grid-content bg-purple-light text-left">
                <img :src="templateInfo[item.prop]" alt="">
              </div>
            </template>
          </el-col>
        </el-row>
      </div>
      <div v-if="isOperationalData">
        <el-form ref="tableInfo" :model="tableInfo" label-width="80px">
          <el-form-item label="访客姓名">
            <el-input v-model="tableInfo.visitorName"></el-input>
          </el-form-item>
          <el-form-item label="是否自驾">
            <el-input v-model="tableInfo.isDriving"></el-input>
          </el-form-item>
          <el-form-item label="访客电话">
            <el-input v-model="tableInfo.visitorPhone"></el-input>
          </el-form-item>
          <el-form-item label="进出入状态" class="w82">
            <el-select v-model="tableInfo.status">
              <el-option label="进入" value="进入"></el-option>
              <el-option label="离开" value="离开"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="被访人姓名" class="w82">
            <el-input v-model="tableInfo.spinsterName"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-date-picker
              class="w160"
              v-model="tableInfo.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <span v-if="isButton" slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "提示信息",
    },
    isDialog: {
      type: Boolean,
      default: false,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
    // 查看详情
    isSeeDetails: {
      type: Boolean,
      default: false,
    },
    // 添加，编辑
    isOperationalData: {
      type: Boolean,
      default: false,
    },
    templateData: {
      type: Array,
      default: () => [],
    },
    templateInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tableInfo: {
        id: "",
        visitorName: "",
        isDriving: "",
        visitorPhone: "",
        status: "进入",
        spinsterName: "",
        date: this.defaultDatePicker(),
      },
    };
  },
  mounted() {},
  methods: {
    handleClose(done) {
      this.closeDialog();
      done();
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
    onCancel() {
      this.closeDialog();
    },
    onSure() {
      this.$emit("info", this.tableInfo);
    },

    // 设置表单值
    filterTableInfo(isID) {
      if (isID) {
        this.$nextTick(() => {
          this.tableInfo = JSON.parse(JSON.stringify(this.templateInfo));
        });
      } else {
        this.$nextTick(() => {
          this.tableInfo = {
            id: "",
            visitorName: "",
            isDriving: "",
            visitorPhone: "",
            status: "进入",
            spinsterName: "",
            date: this.defaultDatePicker(),
          };
        });
      }
    },

    // 设置默认日期为当天
    defaultDatePicker() {
      let date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;

      // 时分秒
      // var H = date.getHours();
      // H = H < 10 ? "0" + H : H;
      // var h = date.getMinutes();
      // h = h < 10 ? "0" + h : h;
      // var s = date.getSeconds();
      // s = s < 10 ? "0" + s : s;
      return`${y}-${m}-${d}`;
    },
  },
};
</script>

<style>
.el-dialog__header {
  background-color: rgb(245, 247, 253);
  text-align: left;
}
.el-row {
  margin-bottom: 20px;
}
.text-rigth {
  text-align: right;
}
.text-left {
  text-align: left;
}
.el-form-item__label {
  width: 82px !important;
}
.el-form-item__content .el-input,
.el-form-item__content .el-select {
  width: 99%;
}
</style>