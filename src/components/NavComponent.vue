<template>
  <div>
    <div
      v-for="(nav, index) in navData"
      :key="index"
      @click="changeNav(nav)"
    >
      <div :class="['aside-block',{'nav-active':routerName === nav.name}]">
        <p :class="['nav-icon' , nav.className]"></p>
        <p class="nav-name">{{ nav.title }}</p>
      </div>
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
  data(){
    return {
      routerName:this.$route.name
    }
  },
  methods: {
    changeNav(item) {
      this.routerName = item.name;
      this.$router.push({ name:item.name });
    },
  },
};
</script>

<style>
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

.aside-block:hover{
  cursor: pointer;
}
</style>