<template>
<transition enter-active-class="animated slideInLeft" leave-active-class="animated zoomOutRight">
  <div class="searchWrap">
    <div class="header">
      <div class="goBack" @click='goBack'>
        < </div>
            <input type="text" name="" value="搜索你想要" class="searchInput">
          <button type="button" class="searchBtn">搜索</button>
      </div>
      <div class="searchHistory">
        <div class="headerHistory">
          历史记录
          <img src="../../../static/img/deleate.png" alt="deleate" class="deleate" @click='clear'>
        </div>
        <ul class="historyContent">
          <li v-for='item in historyArr'>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="grey">

      </div>
      <div class="searchHistory" v-if='yourWantShow'>
        <div class="headerHistory">
          猜你想搜的
          <img src="../../../static/img/hide.png" alt="deleate" class="deleate" @click.stop='hideYourWant'>
        </div>
        <ul class="historyContent">
          <li v-for='item in yourWant'>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="showYourWant" v-if='!yourWantShow'>
        <div class="showYourWantInner"  @click='showYourWant'>
          <img src="../../../static/img/show.png" alt="deleate" class="imgShowYourWant">查看全部推荐词
        </div>
      </div>
    </div>
</transition>
</template>
<script>
export default {
  data() {
    return {
      historyArr: ['周星驰现状', '朝鲜半岛', '地震','印度','习近平'],
      yourWant: ['欠债还不起', '救灾战士', '吴孟达主演', '曹骏', '九寨沟医院'],
      yourWantShow: true
    }
  },
  methods: {
    goBack() {
      this.$store.commit('goBack')
    },
    hideYourWant() {
      this.yourWantShow=false;
    },
    showYourWant() {
      this.yourWantShow=true;
    },
    clear(){
      this.historyArr=[];
    }
  }
}
</script>

<style>
.searchWrap {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3000;
  box-sizing: border-box;
  padding: 0 0.2rem 0 0.2rem;
}

.header {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid rgb(210, 205, 205);
  line-height: 1rem;
  display: flex;
  box-sizing: border-box;
  padding: 0.2rem 0;
}

.goBack {
  font-size: 0.5rem;
  flex: 1;
  line-height: 0.6rem;
  text-align: center;
}

.searchInput {
  flex: 6;
  border: 1px solid rgb(215, 206, 210);
  display: inline-block;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255) url(../../../static/img/search.png) no-repeat 0.1rem 50%;
  background-size: auto 90%;
  color: rgb(173, 162, 164);
  font-size: 0.4rem;
  padding-left: 0.8rem;
}

.searchBtn {
  display: inline-block;
  flex: 1;
  background: #fff;
  border: none;
  font-size: 0.3rem;
  color: rgb(173, 162, 164);
}

.searchHistory {
  width: 100%;
}

.headerHistory {
  position: relative;
  display: inline-block;
  height: 0.8rem;
  width: 100%;
  float: left;
  font-size: 0.4rem;
  line-height: 0.8rem;
  color: rgb(173, 162, 164);
}


.grey {
  width: 100%;
  height: 0.1rem;
  background-color: rgb(201, 201, 201);
  clear: both;
}

.deleate {
  float: right;
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%)
}

.historyContent {
  clear: both;
  width: 100%;
  height: auto;
}

.historyContent li {
  float: left;
  width: 50%;
  font-size: 0.4rem;
  color: rgb(42, 41, 40);
  border: 1px solid rgb(210, 205, 205);
  box-sizing: border-box;
  padding-left: 0.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
}

.showYourWant {
  width: 100%;
  height: 0.8rem;
  position: relative;
}

.showYourWantInner {
  width: fit-content;
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  color: rgb(173, 162, 164);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.imgShowYourWant {
  width: 0.5rem;
  height: 0.4rem;
  position: absolute;
  top: 50%;
  left: -0.3rem;
  transform: translate(-50%, -50%)
}
</style>
