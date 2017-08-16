<template>
<div class="myWrap">
  <div class="loginWrap">
    <ul>
      <li v-for="item in imgLoginArr"><img :src="item" alt=""></li>
    </ul>
    <div class="moreLogin">
      更多登录方式&gt
    </div>
  </div>
  <div class="collectWrap">
    <ul>
      <li v-for='item in imgCollectArr'><img :src="item.url" alt=""><p>{{item.name}}</p></li>
    </ul>
  </div>
  <div class="grey">
  </div>
  <div class="myFollow">
    <h3>我的关注</h3>
    <ul>
      <li v-for='item in this.$store.state.followAuthor'>{{item}}</li>
    </ul>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      imgLoginArr: ['../../../static/img/mobile.png', '../../../static/img/wechat.png', '../../../static/img/qq.png', '../../../static/img/weibo.png'],
      imgCollectArr: [{
          name: '收藏',
          url: '../../../static/img/collect.png'
        },
        {
          name: '历史',
          url: '../../../static/img/history.png'
        },
        {
          name: '夜间',
          url: '../../../static/img/night.png'
        }
      ]
    }
  },
  computed:{
    myfollow(){
      return this.$store.state.followAuthor
    }
  }
}
</script>

<style>
.loginWrap {
  width: 100%;
  height: 2.5rem;
  background-color: rgb(78, 73, 77);
  padding-top: 0.5rem;
  box-sizing: border-box;
}

.loginWrap ul {
  height: 1rem;
  text-align: center;
}

.loginWrap ul li {
  display: inline-block;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  position: relative;
  margin: 0 0.2rem
}

.loginWrap ul li img {
  height: 50%;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.moreLogin {
  font-size: 0.3rem;
  color: rgb(163, 162, 193);
  background-color: rgb(37, 38, 35);
  width: 2.5rem;
  height: 0.5rem;
  margin: 0 auto;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
  margin-top: 0.2rem;
}

.collectWrap {
  width: 100%;
  height: 1.5rem;
  font-size: 1rem;
}

.collectWrap ul {
  display: flex;
  width: 100%;
  height: 100%;
}

.collectWrap ul li {
  flex: 1;
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  padding-top: 0.1rem;
}
.collectWrap ul li p{
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
}

.collectWrap ul li img {
  width: 1rem;
  height: 1rem;
}
.grey{
  width: 100%;
  height: 0.1rem;
  border-top: 1px solid rgb(157, 166, 155);
  border-bottom: 1px solid rgb(157, 166, 155);
  background-color: rgb(199, 207, 201);
}
.myFollow{
  width: 100%;
  position: absolute;
  top: 4.1rem;
  bottom: 1rem;
  font-size: 1rem;
}
.myFollow h3{
  color: rgb(0, 0, 0);
  font-size: 0.5rem;
  text-align: center;
  margin-top: 0.1rem;
}
.myFollow ul li{
  font-size: 0.4rem;
  display: inline-block;
  width: 50%;
  text-align: center;
  margin-bottom: 0.1rem;
}
</style>
