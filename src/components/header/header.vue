<template>
<div class="headerWrap">
  <div class="logo">
    今日头条
  </div>
  <div class="search">
    <div class="search_center" @click.prevent.stop='showSearch'>
      搜索
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    showSearch() {
      this.$store.commit('gotoSearch');
      console.log('ss');
    }
  }
}
</script>

<style>
.headerWrap {
  width: 100%;
  height: 1rem;
  display: flex;
  background: rgb(255, 1, 1);
}

.logo {
  flex: 1;
  height: 1rem;
  font-size: 0.5rem;
  text-align: center;
  line-height: 1rem;
  color: rgb(255, 255, 255);
}

.search {
  flex: 2;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search_center {
  display: inline-block;
  box-sizing: border-box;
  margin-right: 0.1rem;
  width: 100%;
  height: 0.8rem;
  border-radius: 1rem;
  background: rgb(255, 255, 255) url(../../../static/img/search.png) no-repeat 0.2rem 50%;
  background-size: auto 70%;
  font-size: 0.5rem;
  line-height: 0.8rem;
  padding-left: 1rem;
  color: rgb(173, 162, 164);
}
</style>
