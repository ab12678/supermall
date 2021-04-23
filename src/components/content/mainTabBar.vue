<template>
  <tab-bar>
    <tab-baritem path="/home" activeColor="red">
      <template v-slot:tab-icon>
        <img src="~assets/img/主页.svg" alt="" />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~assets/img/主页_active.svg" alt="" />
      </template>
      <template v-slot:tab-text>
        <div>主页</div>
      </template>
    </tab-baritem>
    <tab-baritem path="/cart" activeColor="red">
      <template v-slot:tab-icon>
        <img src="~assets/img/主页.svg" alt="" />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~assets/img/主页_active.svg" alt="" />
      </template>
      <template v-slot:tab-text>
        <div>主页</div>
      </template>
    </tab-baritem>
    <tab-baritem path="/category" activeColor="red">
      <template v-slot:tab-icon>
        <img src="~assets/img/主页.svg" alt="" />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~assets/img/主页_active.svg" alt="" />
      </template>
      <template v-slot:tab-text>
        <div>主页</div>
      </template>
    </tab-baritem>
    <tab-baritem path="/profile" activeColor="red">
      <template v-slot:tab-icon>
        <img src="~assets/img/主页.svg" alt="" />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~assets/img/主页_active.svg" alt="" />
      </template>
      <template v-slot:tab-text>
        <div>主页</div>
      </template>
    </tab-baritem>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/TabBar/TabBar";
import TabBaritem from "@/components/common/TabBar/TabBaritem";
export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBaritem,
  },
};
</script>

<style>
</style>