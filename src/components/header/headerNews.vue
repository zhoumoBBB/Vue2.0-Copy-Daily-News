<template>
<div class="headerNewsWrap">
  <div class="goback" @click="goBack">
    &lt </div>
      <div class="share">
        ...
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$store.commit('goBack');
    }
  }
}
</script>

<style>
.headerNewsWrap {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid rgb(206, 226, 214)
}

.goback {
  width: 1rem;
  height: 100%;
  float: left;
  font-size: 0.5rem;
  text-align: center;
  line-height: 1rem;
}

.share {
  width: 1rem;
  height: 100%;
  float: right;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.7rem;
}
</style>
