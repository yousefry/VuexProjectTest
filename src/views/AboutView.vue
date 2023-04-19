<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>this is counter</h3>
    <br>
     {{ counter }}
     <br>
    <button @click="inc">plus</button>
    <button @click="minus" style="margin: 0 10px;">minus</button>
  </div>

  {{ counter }}
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "AboutView",
  computed: {
    ...mapState('counter',["counter"]),
  },
  methods: {
    inc() {
      this.$store.dispatch('counter/incAct')
      // console.log(this.$store)
    },
    minus() {
      this.$store.dispatch('counter/minusAct')
      // console.log(this.$store)
    },
  },
};
</script>

<style>
.about {
  text-align: center;
}
</style>
