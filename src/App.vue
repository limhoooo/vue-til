<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        console.log("라우터이동감지");
      }
    },
  },
};
</script>

<style>
@import "./css/reset.css";
@import "./css/common.css";
</style>
