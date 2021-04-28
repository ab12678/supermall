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
    <!-- feature区域 -->
    <feature-view></feature-view>
    <!-- controlbar区域 -->
    <control-bar
      :titles="['热门', '火爆', '推销']"
      @currenttype="currenttype(index)"
    ></control-bar>
    <!-- goods区域 -->
    <home-goods-list :goodslist="showgoods()"></home-goods-list>
  </div>
</template>

// 结构清晰，不要有内容代码
<script>
import NavBar from "@/components/common/NavBar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import HomeRecommend from "./homechild/HomeRecommend";
import FeatureView from "./homechild/HomeFeature";
import HomeGoodsList from "./homechild/HomeGoodsList";

import ControlBar from "@/components/content/controlBar";

import { getHomeMultidata, getGoodsData } from "@/network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    ControlBar,
    HomeGoodsList,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoodsData("pop");
    this.getGoodsData("news");
    this.getGoodsData("sell");
  },
  methods: {
    /**
     * 与监听相关
     */

    currenttype(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    /**
     * 与网络相关
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(res);
      });
    },
    getGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  computed: {
    showgoods() {
      // 凡是用到data里属性的都要加this
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style >
#home {
  height: 5000px;
}
.nav-bar {
  /* 像背景颜色可以在调用组件的style里设置 */
  background-color: pink;
}
</style>