<template>
<div class="tuijianWrap">
  <scroller :on-refresh="refresh" :on-infinite="infinite">
    <div v-for="item,index in news" @click="showDetail(item.source_url)" class="listWrap" v-if='newsShow.indexOf(index)<0'>
      <div class="newsTitle">
        {{item.title}}
      </div>
      <ul class="newsImg">
        <li v-for="images in item.image_list">
          <img :src="images.url" alt="">
        </li>
      </ul>
      <div class="newsAuthor">
        {{item.media_name}}
      </div>
      <div class="newsComment">
        {{item.comment_count}}评论
      </div>
      <div class="newsTime" v-totime>
        {{item.publish_time}}
      </div>
      <div class="hide" @click.stop="showToggle(index)">
        X
      </div>
      <div class="hideNews" v-if='show.indexOf(index) >= 0' @click.stop='hideNews(index)'>
        不感兴趣
      </div>
    </div>
  </scroller>
</div>
</div>
</template>

<script>
var api = 'https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1D59938B24F486&cp=59821F5468768E1&min_behot_time=1501754399'
export default {
  created() {
    this.$http.jsonp(api).then(function(res) {
      var result = res.body.data;
      this.news = result;
    }, function() {
      console.log('请求失败');
    });
  },
  data() {
    return {
      news: [],
      show: [],
      notIntreastShow: false,
      newsShow:[],
    }
  },
  methods: {
    showDetail(url) {
      this.$store.commit('gotoDetail', url);
    },
    showToggle(index) {
      if(this.show==''){
        this.show.push(index);
        return
      }else if(this.show[0]!=index){
        this.show.splice(0,1,index);
      }else{
        this.show=[];
      }
    },
    refresh(done) {
      this.$http.jsonp(api).then(function(res) {
        var result = res.body.data;
        for(let i=0;i<result.length;i++){
          this.news.splice(0,0,result[i])
        };
        done();
      }, function() {
        console.log('请求失败');
      });
    },
    infinite(done) {
      console.log('加载');
      this.$http.jsonp(api).then(function(res) {
        var result = res.body.data;
        for(let i=0;i<result.length;i++){
          this.news.push(result[i])
        };
        done();
      }, function() {
        console.log('请求失败');
      });
    },
    hideNews(index){
      this.newsShow.push(index);
    }
  }
}
</script>

<style>
.tuijianWrap>div {
  width: 100%;
  margin-bottom: 0.1rem;
  display: inline-block;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 0.1rem 0 0.1rem;
}

.newsTitle {
  clear: both;
  font-size: 0.3rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.newsImg {
  display: flex;
  margin-bottom: 0.1rem;
}

.newsImg li {
  display: inline-block;
  float: left;
  flex: 1;
}

.newsImg li:nth-child(1) {
  margin-right: 0.1rem;
}

.newsImg li:nth-child(2) {
  margin-right: 0.1rem;
}

.newsImg li img {
  width: 100%;
  height: 100%;
}

.newsAuthor {
  font-size: 0.2rem;
  margin: 0.1rem 0 0.2rem 0;
  color: rgb(165, 169, 175);
  float: left;
  display: inline-block;
}

.newsComment {
  font-size: 0.2rem;
  float: left;
  margin: 0.1rem 0 0.2rem 0.1rem;
  color: rgb(165, 169, 175);
}

.newsTime {
  font-size: 0.2rem;
  float: left;
  color: rgb(165, 169, 175);
  margin: 0.1rem 0 0.2rem 0.1rem;
}

.hide {
  float: right;
  font-size: 0.2rem;
  margin: 0.1rem 0 0.2rem 0.1rem;
  border: 1px solid rgb(165, 169, 175);
  color: rgb(165, 169, 175);
  border-radius: 0.1rem;
  text-align: center;
  width: 0.5rem;
}

.hideNews {
  float: right;
  width: 1rem;
  background: rgb(233, 83, 19);
  border-radius: 0.1rem;
  text-align: center;
  font-size: 0.2rem;
  margin: 0.1rem 0 0.2rem 0.1rem;
  border: 1px solid rgb(233, 83, 19);
  color: rgb(255, 255, 255);
}

.loading-layer {
  clear: both;
}

.listWrap {
  border-bottom: 1px solid rgb(182, 178, 200);
  display: inline-block;
  width: 100%;
}
</style>
