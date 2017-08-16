<template>
<div>
  <v-header></v-header>
  <v-tablist></v-tablist>
  <router-view class="childrouter"></router-view>
</div>
</template>

<script>
import header from '../header/header.vue'
import tabList from '../tabList/tablist.vue'
export default {
  created() {

  },
  data() {
    return {

    }
  },
  components: {
    'v-tablist': tabList,
    'v-header': header,
  }
}
</script>

<style>
div {
  font-size: 1rem;
}

.childrouter {
  width: 100%;
  position: absolute;
  top: 1.8rem;
  bottom: 1rem;
  background-color: rgb(236, 228, 223);
  overflow: hidden;
}
</style>
