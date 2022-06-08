<template>
  <div class="hll-table">
    <el-table :data="tableData" border style="width: 100%" :default-sort="defaultSort">
      <el-table-column v-if="isImg" label="图片" width="80px" align="center">
        <template slot-scope="scope">
          <div class="demo-image__preview">
            <el-image 
              style="width: 30px; height: 30px"
              :src="url"
              @click="clickImg(scope.row.img)" 
              :preview-src-list="srcList">
            </el-image>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        v-for="(item, index) in titleData"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
      </el-table-column>
      <el-table-column label="操作" v-if="isOperation" align="center">
        <template slot-scope="scope">
          <el-button :class="[{mr30:isEdit}]" v-if="isSee" type="text" @click="see(scope.row)"
            >查看</el-button
          >
          <el-button :class="[{mr30:isDel}]" v-if="isEdit" type="text" @click="edit(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDel"
            class="button-del"
            type="text"
            @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="hll-pagination"
      v-if="isPagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "HllTable",
  props: {
    // 表头数据
    titleData: {
      type: Array,
      default: () => [],
    },
    // 表格数据
    tableData: {
      type: Array,
      default: () => [],
    },
    // 表格内是否出现操作按钮列
    isOperation: {
      type: Boolean,
      default: false,
    },
    // 查看按钮是否出现
    isSee: {
      type: Boolean,
      default: true,
    },
    // 编辑按钮是否出现
    isEdit: {
      type: Boolean,
      default: true,
    },
    // 删除按钮是否出现
    isDel: {
      type: Boolean,
      default: true,
    },
    // 列中是否展示图片是否出现
    isImg: {
      type: Boolean,
      default: false,
    },
    // 列中是否展示图片是否出现
    defaultSort: {
      type: Object,
      default: function(){
        return {
          prop:'date',
          order:'descending'
        }
      },
    },

    // 是否开启分页
    isPagination: {
      type: Boolean,
      default: true,
    },

    // 当前是第几页
    currentPage: {
      type: Number,
      default: 1,
    },
    // 分页数据选项
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
    // 每页显示的数据条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 数据总数
    total: {
      type: Number,
      default: 100,
    },
  },
  data(){
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: []
    }
  },
  methods: {
    see(item) {
      // console.log(item);
      this.$emit('seeDtaItem',item)
    },
    edit(item) {
      this.$emit('editDataItem',item);
    },
    del(item) {
      this.$emit('delDataItem',item);
    },

    handleSizeChange(val) {
      this.$emit("sizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("currentChange", val);
    },

    clickImg(item){
      this.srcList = []
      this.srcList.push(item)
    }
  },
};
</script>
<style>
.hll-table {
  margin-top: 20px;
}
.has-gutter {
}
.el-table--border,
.el-table--group {
  border: 1px solid #e9ecf7;
}
.el-table th.el-table__cell {
  background-color: #f5f7fd;
  color: #222222;
  font-size: 14px;
  font-weight: bold;
}
.el-button--text {
  color: #5473e8;
  font-size: 14px;
}
.mr30{
  margin-right: 30px;
}
.button-del {
  color: #ff5e4e;
}
.hll-pagination {
  margin-top: 20px;
  text-align: right;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #5473e8;
}
.el-button--text:hover {
  color: #5473e8;
}
.button-del:hover {
  color: #ff5e4e;
}
</style>