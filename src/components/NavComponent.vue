<template>
  <div class="hll-aside">
    <div class="aside-left">
      <div v-for="(nav, index) in navData" :key="index" @click="changeNav(nav)">
        <div
          :class="['aside-block', { 'nav-active': routerName === nav.name }]"
        >
          <p :class="['nav-icon', nav.className]"></p>
          <p class="nav-name">{{ nav.title }}</p>
        </div>
      </div>
    </div>
    <div class="aside-right" v-if="isSecond">
      <router-link
        v-for="(n_sec, i_sec) in routerSecondData"
        :key="i_sec"
        class="nav-second"
        :to="n_sec.path"
        >{{ n_sec.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      routerName: this.$store.state.routerName || this.$route.name,
      routerSecondData: this.$store.state.routerSecondData,
      isSecond: this.$store.state.isSecond,
    };
  },
  methods: {
    changeNav(item) {
      this.routerName = item.name;
      this.$router.push({ name: item.name });
      if (item.children && item.children.length) {
        this.routerSecondData = item.children;
        this.isSecond = true;
        this.$emit("setAsideWidth", "240px");

        // 状态存储
        sessionStorage.setItem("isSecond", true);
        sessionStorage.setItem("asideWidth", "240px");
        sessionStorage.setItem(
          "routerSecondData",
          JSON.stringify(item.children)
        );
      } else {
        this.routerSecondData = [];
        this.isSecond = false;
        this.$emit("setAsideWidth", "80px");

        // 状态存储
        sessionStorage.setItem("isSecond", false);
        sessionStorage.setItem("asideWidth", "80px");
        sessionStorage.setItem("routerSecondData", JSON.stringify([]));
      }

      //存储页面操作时的状态
      sessionStorage.setItem("routerName", item.name);
    },
  },
};
</script>

<style>
.hll-aside {
  background-color: #35495d;
  display: flex;
}
.aside-block {
  width: 80px;
  height: 80px;
  background-color: #35495d;
  color: #ffffff;
  opacity: 0.8;
  font-size: 14px;
  padding: 18px 0;
  box-sizing: border-box;
}
.nav-icon {
  font-size: 20px;
  margin-bottom: 10px;
}
.nav-active {
  background-color: #2c3944;
  opacity: 1;
}

.aside-block:hover {
  cursor: pointer;
}

.aside-right {
  width: 160px;
  background-color: #ffffff;
}
.nav-second {
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #555555;
  display: block;
  line-height: 40px;
  text-decoration: none;
}

.router-link-exact-active {
  background-color: #f5f7fd;
  color: #5473e8;
  font-weight: bold;
}
</style>