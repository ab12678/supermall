<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="item.title" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/Swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>