<template>
  <div id="app">
    <!-- 路由的显示区 -->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <!-- 使用组件 -->
  </div>
</template>

// 组件化开发，appvue 主体页面，路由显示区
 

<script>
import MainTabBar from "@/components/content/mainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>


<style>
@import "./assets/css/base.css";
</style>
