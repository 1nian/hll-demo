<template>
  <el-container class="hll-container">
    <el-header class="hll-header">
      <div class="hll-header-icon">
        <img src="../assets//images/logo.png" alt="" />
      </div>
      <div class="hll-header-right">
        <div class="hll-header-text">智慧园区IOC运营中心综合信息管理系统</div>
        <div style="margin-right: 20px">
          <el-avatar
            class="header-right-img"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown
            class="header-right-username"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              {{ this.$store.state.userInfo.userName
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
              <el-dropdown-item command="修改密码">修改密码</el-dropdown-item>
              <el-dropdown-item class="layout" command="layout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="hll-aside" :width="asideWidth">
        <nav-component
          :navData="navData"
          @setAsideWidth="getAsideWidth"
          ref="navComponent"
        ></nav-component>
      </el-aside>
      <el-main class="hll-main"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavComponent from "../components/NavComponent.vue";
import { routeInfo } from "../router/routeInfo";
export default {
  components: {
    NavComponent,
  },
  data() {
    return {
      navData: [],
      asideWidth: "80px",
    };
  },
  created() {
    this.setInit();
  },
  methods: {
    setInit(){
      // 页面刷新时获取用户信息和当前页面状态
      this.$store.commit(
        "setUserInfo",
        JSON.parse(sessionStorage.getItem("userInfo"))
      );
      this.$store.commit("setTtoken", sessionStorage.getItem("token"));
      this.$store.commit("setRouterName", sessionStorage.getItem("routerName"));
      this.$store.commit(
        "setIsSecond",
        JSON.parse(sessionStorage.getItem("isSecond"))
      );
      this.$store.commit("setRouterName", sessionStorage.getItem("routerName"));
      this.$store.commit("setAsideWidth", sessionStorage.getItem("asideWidth"));
      this.$store.commit(
        "setRouterSecondData",
        JSON.parse(sessionStorage.getItem("routerSecondData"))
      );

      this.navData = routeInfo;
      this.asideWidth = this.$store.state.asideWidth;
    },
    handleCommand(item) {
      switch (item) {
        case "layout":
          this.layout();
          break;

        case "userInfo":
          this.goToUserInfo();
          break;

        default:
          alert(item);
      }
    },
    layout() {
      this.$router.push({ name: "login" });
      sessionStorage.clear();
    },
    getAsideWidth(item) {
      this.asideWidth = item;
    },
    goToUserInfo() {
      let parpams = this.navData.find(item => item.id === 3);
      this.$refs.navComponent.changeNav(parpams);
    },
  },
};
</script>

<style>
.hll-container {
  background-color: #f3f4f7;
}
.hll-header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0;
}
.hll-header-icon {
  width: 80px;
  height: 60px;
  background-color: #35495d;
}
.hll-header-icon img {
  width: 36px;
  height: 36px;
  margin-top: 11px;
}

.hll-header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hll-header-text {
  font-size: 18px;
  color: #222222;
  text-align: left;
  line-height: 100%;
  margin-left: 20px;
}

.header-right-img {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.header-right-username {
  font-size: 14px;
  vertical-align: middle;
}
.header-right-username:hover {
  cursor: pointer;
}
.layout {
  color: #ff5e4e;
}
.hll-main {
  height: 889px;
  margin: 10px;
  padding: 20px;
  background-color: #ffffff;
}
</style>