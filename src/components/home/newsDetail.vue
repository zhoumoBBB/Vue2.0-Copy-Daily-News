<template>
<div class="newsDetailWrap">
  <v-headernews></v-headernews>
  <div class="newsContent" ref='scrollNewsDetails'>
    <ul>
      <li class="newsDetailTitle">
        {{newsDetail.title}}
      </li>
      <li class="newsDetailAuthor">
        <div class="authorName">
          {{newsDetail.detail_source}}
        </div>
        <div :class="{follow:isfollow,notfollow:isnotfollow}" @click.stop='followAuthor(newsDetail.detail_source)'>
          {{followString}}
        </div>
      </li>
      <div style="clear:both">

      </div>
      <li class="newsDetailContent" v-html='newsDetail.content'>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import header from '../header/headerNews.vue'
import iScroll from 'iScroll'
export default {
  created() {
    let nowUrl = this.$store.state.nowUrl;
    this.$http.jsonp('https://m.toutiao.com' + nowUrl + 'info/').then(function(res) {
      var result = res.body.data;
      this.newsDetail = result;
      this.$nextTick(() => {
        this.initScroll();
        this.checkFollow(this.newsDetail.detail_source);
      });
    }, function() {
      this.newsDetail = {
        title: '对不起,这条新闻可能已经失效或者删除'
      },
      this.followString=''
    });
  },
  data() {
    return {
      newsDetail: '',
      isnotfollow:false,
      isfollow:true,
      followString:'关注'
    }
  },
  components: {
    'v-headernews': header
  },
  methods: {
    initScroll() {
      this.scroll = new iScroll(this.$refs.scrollNewsDetails, {
        click: true,
        scrollX: false,
        scrollY: true,
        preventDefault: true,
      });
      var scroll = this.scroll;
      setTimeout(function() {
        scroll.refresh();
      }, 1000);
    },
    followAuthor(name){
      if(name!==''){
        if(this.followString==='关注'){
          this.followString='已关注';
          this.$store.commit('addAuthor',name);
          this.isnotfollow=true;
          this.isfollow=false;
        }else{
          this.followString='关注';
          this.$store.commit('removeAuthor',name)
          this.isnotfollow=false;
          this.isfollow=true;
        }
      }
    },
    checkFollow(name){
      for(let i=0;i<=this.$store.state.followAuthor.length;i++){
        if(this.$store.state.followAuthor[i]==name.toString()){
          this.isnotfollow=true;
          this.isfollow=false;
          this.followString='已关注'
        }
      }
    }
  }

}
</script>

<style>
.newsDetailWrap {
  background-color: rgb(255, 255, 255);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2000;
}

.newsDetailTitle {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.1rem;
  font-size: 0.4rem;
}

.newsContent {
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 1rem;
}

.newsDetailAuthor {
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
  padding: 0.3rem 0.1rem;
  display: block;
  position: relative;
}
.authorName{
  font-size: 0.3rem;
  float: left;
  width: auto;
  height: 1rem;
  line-height:1rem;
  position: absolute;
  top: 0;
}
.follow{
  font-size: 0.3rem;
  float: right;
  width:1rem;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(53, 109, 189);
}
.notfollow{
  font-size: 0.3rem;
  float: right;
  width:1rem;
  text-align: center;
  color: rgb(181, 189, 184);
  background-color:rgb(232, 238, 235);
}
.newsDetailContent {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0.1rem;
  overflow: auto;
}

.newsDetailContent p {
  font-size: 0.3rem;
  margin-bottom: 0.1rem;
}

.newsDetailContent img {
  width: 100%;
  height: auto;
  max-resolution: 0.1rem;
  margin-bottom: 0.1rem;
}
</style>
