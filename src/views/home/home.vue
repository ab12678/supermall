<template>
  <div id="home">
    <!-- nav-bar区域 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 轮播图区域 -->
    <home-swiper :banner="banner"></home-swiper>
    <!-- 推荐区域 -->
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import HomeRecommend from "./homechild/HomeRecommend";

import { getHomeMultidata } from "@/network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(res);
      console.log(res.data.banner.list);
      console.log(this.recommend);
    });
  },
};
</script>

<style >
.nav-bar {
  /* 像背景颜色可以在调用组件的style里设置 */
  background-color: pink;
}
</style>