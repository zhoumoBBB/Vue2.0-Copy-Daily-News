import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
let store = new Vuex.Store({
  state: {
    tabList: [{
        name: '关注',
        path: '/home/guanzhu'
      },
      {
        name: '推荐',
        path: '/home/tuijian'
      },
      {
        name: '热点',
        path: '/home/redian'
      },
      {
        name: '视频',
        path: '/home/shipin'
      },
      {
        name: '北京',
        path: '/home/beijing'
      },
      {
        name: '社会',
        path: '/home/shehui'
      },
      {
        name: '头条号',
        path: '/home/toutiaohao'
      },
      {
        name: '问答',
        path: '/home/wenda'
      },
      {
        name: '娱乐',
        path: '/home/yule'
      },
      {
        name: '图片',
        path: '/home/tupian'
      },
      {
        name: '科技',
        path: '/home/keji'
      },
      {
        name: '汽车',
        path: '/home/qiche'
      },
      {
        name: '体育',
        path: '/home/tiyu'
      }
    ],
    nowUrl: '',
    detailShow: '',
    searchShow:'',
    followAuthor:[]
  },
  // 变更状态
  mutations: {
    gotoDetail(state, url) {
      state.nowUrl = url;
      state.detailShow = true;
    },
    goBack(state) {
      state.detailShow = false;
      state.searchShow=false;
    },
    gotoSearch(state){
      state.searchShow = true
    },
    addAuthor(state,name){
      state.followAuthor.push(name.toString());
    },
    removeAuthor(state,name){
      for(let i=0;i<state.followAuthor.length;i++){
        if(state.followAuthor[i]==name.toString()){
          state.followAuthor.splice(i,1)
        }
      }
    }
   },
  getters: {

  },
  actions: {

  }
});
export {
  store
}
