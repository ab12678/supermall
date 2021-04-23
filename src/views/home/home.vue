<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar";
export default {
  name: "home",
  components: {
    NavBar,
  },
};
</script>

<style >
#home {
  /* 像背景颜色可以在调用组件的style里设置 */
  background-color: pink;
}
</style>