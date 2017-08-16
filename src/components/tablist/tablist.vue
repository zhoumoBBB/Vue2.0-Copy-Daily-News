<template>
<div class="tabWrap" ref='scrollTab'>
  <ul>
    <li v-for='item in this.$store.state.tabList'>
      <router-link tag="a" :to="item.path">{{item.name}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
import iScroll from 'iScroll'
export default {
  created() {
    this.$nextTick(() => {
      setInterval(this.initScroll(), 100)
    })
  },
  data() {
    return {

    }
  },
  methods: {
    initScroll() {
      this.scroll = new iScroll(this.$refs.scrollTab, {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
      });
    },
    gotoRouter(path){
      this.$router.push(path);
    }
  }
}
</script>

<style>
.tabWrap {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
}

.tabWrap ul {
  display: flex;
  overflow: hidden;
  height: 100%;
  width: 200%;
}

.tabWrap ul li {
  display: inline-block;
  flex: 1;
  line-height: 0.8rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  text-align: center;
}

.tabWrap ul li a {
  font-size: 0.3rem;
}

.active {
  color: rgb(254, 8, 8)
}
</style>
