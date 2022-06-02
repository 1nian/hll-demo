<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
#app .hll-el-button {
  border-color: #5473e8;
  background:#5473E8;
  color: #ffffff;
}
#app .el-input__inner:focus {
  border-color: #5473e8;
}
#app .el-tabs__item.is-active{
  color: #5473e8;
}
#app .el-tabs__active-bar{
  background-color: #5473e8;
}
#app .el-tabs__item .is-top:hover{
color: #5473e8;
}
</style>
