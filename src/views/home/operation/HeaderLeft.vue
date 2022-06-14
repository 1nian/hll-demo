<template>
  <el-col :span="12">
    <div class="item-card">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in data" :key="item.id">
          <el-card class="box-card" shadow="never">
            <div class="item-img">
              <img :src="item.icon" alt="" />
              <div>
                <span class="item-title mr10">{{ item.title }}</span
                ><span class="item-title">{{ item.count }}</span>
              </div>
            </div>
            <div class="item-footer">
              <div>
                <span class="item-f-text mr5">可用</span
                ><span class="item-success">{{ item.isSure }}</span>
              </div>
              <div>
                <span class="item-f-text mr5">不可用</span
                ><span class="item-danger">
                  {{ item.count - item.isSure }}
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card" shadow="never">
            <div class="item-img">
              <img src="../../../assets//images/icon-4.png" alt="" />
              <div>
                <span class="item-title mr10">运维通知人</span
                ><span class="item-title">7</span>
              </div>
            </div>
            <div class="item-footer">
              <div>
                <span class="item-border border-success mr5"></span
                ><span class="item-success">启用中</span>
              </div>
              <div>
                <span class="item-setting" @click="setting">设置</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "HeaderLeft",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  components: {},

  computed: {},

  methods: {
    setting() {
      this.$emit("setting");
    },
  },
};
</script>
<style>
.item-card {
  background: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.box-card {
  width: 200px;
  height: 200px;
}
.item-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 145px;
}
.item-img img {
  width: 38px;
  height: 38px;
}
.item-title {
  font-size: 16px;
  font-weight: bold;
}
.mr10 {
  margin-right: 10px;
}
.item-footer {
  height: 54px;
  background: #fbfcff;
  border: 1px solid rgb(233, 236, 247);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item-f-text {
  font-size: 14px;
}
.mr5 {
  margin-right: 5px;
}
.item-success {
  color: #4fd785;
  font-size: 14px;
}
.item-danger {
  color: #ff5e4e;
  font-size: 14px;
}
.el-card__body {
  padding: 0;
}
.item-border {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}
.border-success {
  background: #4fd785;
}
.item-setting {
  font-size: 14px;
  font-weight: 400;
  color: rgb(84, 115, 232);
}
.item-setting:hover {
  cursor: pointer;
}
</style>