<template>
  <div class="goodslist">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
};
</script>

<style>
.goodslist {
  display: flex;
  /* 可以换行 */
  flex-wrap: wrap;
}
</style>