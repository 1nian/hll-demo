<template>
  <div>
    <div class="aside-icon">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="aside-block" >
        <p class="nav-icon el-icon-house"></p>
        <p class="nav-name">首页</p>
    </div>                   
    <div class="aside-block" >
        <p class="nav-icon el-icon-house"></p>
        <p class="nav-name">首页</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aside-icon {
  width: 36px;
  height: 36px;
  margin: 18px auto;
}
.aside-icon img{
    width: 100%;
    height: 100%;
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
.nav-icon{
    font-size: 20px;
    margin-bottom: 10px;
}
.active{
    background-color: #2C3944;
    opacity: 1;
}
</style>