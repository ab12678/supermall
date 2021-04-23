<template>
  <span class="tab-bar-item" @click="changeClick">
    <slot v-if="!isActive" name="tab-icon"></slot>
    <slot v-else name="tab-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="tab-text"></slot>
    </div>
  </span>
</template>

<script>
export default {
  name: "TabBaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    changeClick() {
      // console.log("1111");
      // 这里的this指向点击者
      this.$router.replace(this.path);
    },
  },
};
</script>

<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
/* .active {
  color: red;
} */
</style>