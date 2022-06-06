<template>
  <div>
    <keep-alive v-if="this.$route.meta.isKeepAlive"><router-view /> </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'SecurityIndex',
};
</script>

<style>
</style>