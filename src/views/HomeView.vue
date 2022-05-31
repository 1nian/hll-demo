<template>
  <el-container>
    <el-aside class="hll-aside" width="80px"><nav-component></nav-component></el-aside>
    <el-container>
      <el-header class="hll-header">
        <p class="hll-header-text">智慧园区IOC运营中心综合信息管理系统</p>
        <div class="hll-header-right">
          <el-avatar
            class="header-right-img"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown class="header-right-username" trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavComponent from '../components/NavComponent.vue'
export default {
  components:{
    NavComponent
  }
};
</script>

<style>
.hll-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hll-header-text {
  font-size: 18px;
  color: #222222;
  margin-left: 20px;
  text-align: left;
  line-height: 100%;
}
.hll-header-right {
  display: flex;
  align-items: center;
}
.header-right-img {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border-radius: 50%;
}
.header-right-username {
  font-size: 14px;
}
.header-right-username:hover {
  cursor: pointer;
}
.hll-aside {
  width: 80px;
  background-color: #35495d;
}
</style>