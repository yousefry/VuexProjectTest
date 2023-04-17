<template>
  <div id="app">
    <BaseHeader @show-overly="showOverly" />
    <router-view />
    <BaseFooter />
    <div class="overlay" :class="{'overlay--is-active' : canShowOverly}"></div>
  </div>
</template>
<script>
import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter.vue";
export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
  metaInfo:{
    titleTemplate:'%s - دیجی فروش'
  }
  ,
  data: () => ({
    canShowOverly: false,
  }),
  methods: {
    showOverly(showOverly_) {
      this.canShowOverly = showOverly_;
    },
  },
};
</script>
<style>
</style>
