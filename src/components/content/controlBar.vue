<template>
  <div class="bar">
    <!-- 只有文字不一样的就没必要高个插槽 -->
    <div
      class="bar-item"
      v-for="(item, index) in titles"
      :key="index"
      @click="changeindex(index)"
    >
      <span :class="{ active: currentindex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "controlBar",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    changeindex(index) {
      this.currentindex = index;
    },
  },
};
</script>

<style>
.bar {
  display: flex;
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.bar-item {
  flex: 1;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
}
.active {
  color: pink;
  padding-bottom: 2px;
  border-bottom: 1px solid red;
}
</style>