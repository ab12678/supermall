<template>
  <goods-list>
    <div v-for="(item, index) in goodslist" :key="index" class="goods">
      <img src="item.image" alt="item.title" />
      <p>{{ item.title }}</p>
      <span class="price">{{ item.orgPrice }}</span>
      <span class="sc">{{ item.cfav }}</span>
    </div>
  </goods-list>
</template>

<script>
import GoodsList from "@/components/content/goodslist/GoodsList";
// import GoodsListItem from "@/components/content/goodslist/GoodListItem";
export default {
  name: "HomeGoodsList",
  components: {
    GoodsList,
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  flex: 1;
  width: 50%;
  text-align: center;
  box-sizing: border-box;
  padding: 0 2%;
}
.goods img {
  display: block;
  width: 100%;
  border-radius: 5px;
}
.goods p {
  /* 用省略号替代溢出 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5px;
}
.price {
  color: red;
}
.sc::before {
  content: "";
  /* 默认行内样式 */
  display: inline-block;
  margin-left: 5px;
  position: relative;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") no-repeat;
}
</style>