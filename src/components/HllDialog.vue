<template>
  <div>
    <el-dialog
      :title="title"
      :visible="isDialog"
      width="498px"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <div v-html="dialogInfo"></div>
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
    titleData: {
      type: Array,
      default: () => [],
    },
    isDialog: {
      type: Boolean,
      default: false,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
    },
    dialogInfo: {
      type: String,
      default: "",
    },
  },
  computed:{
    filterTitle(){
      
      return this.titleData
    }
  },
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
    onSure() {},
  },
};
</script>

<style>
.el-dialog__header {
  background-color: rgb(245, 247, 253);
  text-align: left;
}
.el-row{
  margin-bottom: 20px;
}
</style>