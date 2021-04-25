<template>
  <div class="recommend">
    <div class="recommend_item" v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="item.title" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  /* 让它自适应 */
  width: 100%;
  box-shadow: 0 10px 1px rgba(100, 100, 100, 0.2);
}
.recommend_item {
  flex: 1;
  width: 20%;
  text-align: center;
  font-size: 14px;
}
.recommend_item img {
  width: 90%;
  margin: 0 auto 10px auto;
}
</style>