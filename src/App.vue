<template>
<div class="appWrap">
  <router-view></router-view>
  <nav>
    <li>
      <router-link tag="a" to="/home/tuijian">首页</router-link>
    </li>
    <li>
      <router-link tag="a" to="/video">视频</router-link>
    </li>
    <li>
      <router-link tag="a" to="/wenews">微头条</router-link>
    </li>
    <li>
      <router-link tag="a" to="/my">我的</router-link>
    </li>
  </nav>
  <v-detail v-if="detailShow"></v-detail>
  <v-search v-if='searchShow'></v-search>
</div>
</template>

<script>
import newsDetail from './components/home/newsDetail.vue'
import search from './components/header/search.vue'
export default {
  components: {
    'v-detail': newsDetail,
    'v-search': search
  },
  computed: {
    detailShow() {
      return this.$store.state.detailShow
    },
    searchShow() {
      return this.$store.state.searchShow
    }
  }
}
</script>

<style>
.appWrap {
  width: 100%;
  height: 100%;
}

nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
}

nav li {
  display: inline-block;
  float: left;
  flex: 1;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}

nav li a {
  display: inline-block;
  font-size: 0.4rem;
}

.active {
  color: rgb(254, 8, 8)
}
</style>
