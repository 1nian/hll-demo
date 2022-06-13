<template>
  <div class="hll-search">
    <div>
      <el-select
        class="w160"
        v-model="valueSelect"
        :placeholder="placeholderSelect"
        v-if="isSelect"
      >
        <el-option
          v-for="(item, index) in optionSelect"
          :key="index"
          :label="item.label"
          :value="item.prop"
        >
        </el-option>
      </el-select>
      <el-date-picker
        class="w160"
        v-if="isDatePicker"
        v-model="valueDate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
      >
      </el-date-picker>
      <el-input
        class="hll-search-input"
        v-model="valueInput"
        :placeholder="placeholder"
      ></el-input>
      <el-button class="hll-el-button hll-search-button" type="primary" @click="serach"
        >搜索</el-button
      >
      <el-button v-show="isReset" class="hll-search-button" @click="reset"
        >重置</el-button
      >
    </div>
    <div>
      <el-button
        v-if="isAdd"
        class="hll-el-button hll-search-button"
        @click="add"
        >添加</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 搜索条件
    placeholder: {
      type: String,
      default: "搜索文本框",
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
    isDatePicker: {
      type: Boolean,
      default: false,
    },
    placeholderSelect: {
      type: String,
      default: "选择文本框",
    },
    optionSelect: {
      type: Array,
      default: () => [],
    },
    isAdd: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valueInput: "",
      valueSelect: this.defaultSelect(),
      valueDate: this.defaultDatePicker(),
      isReset: false,
    };
  },
  methods: {
    serach() {
      let params = {};
      this.isReset = true;
      if (this.isSelect) {
        params["valueSelect"] = this.valueSelect;
      }
      if (this.isDatePicker) {
        params["valueDate"] = this.valueDate;
      }
      params["valueInput"] = this.valueInput;
      params["status"] = "search";
      this.$emit("searchData", params);
    },
    reset() {
      let params = { status: "reset" };
      this.valueInput = "";
      if (this.isSelect) {
        this.valueSelect = this.defaultSelect();
      }
      if (this.isDatePicker) {
        this.valueDate = this.defaultDatePicker();
      }

      this.isReset = false;
      this.$emit("searchData", params);
    },

    defaultSelect() {
      if (this.optionSelect.length && this.optionSelect.length > 0) {
        return this.optionSelect[0].label;
      } else {
        return null;
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
      return y + "-" + m + "-" + d;
    },

    add() {
      this.$emit("addTableData");
    },
  },
};
</script>

<style>
.hll-search {
  display: flex;
  justify-content: space-between;
}
.hll-search-input {
  width: 260px;
  margin-right: 10px;
}
.hll-search-button {
  width: 88px;
}
.hll-search .w160 {
  width: 160px;
  margin-right: 10px;
}
</style>