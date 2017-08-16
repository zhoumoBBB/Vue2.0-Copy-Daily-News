// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//依赖项引入及配置
import Vue from 'vue'
import App from './App'
import Animate from 'animate.css'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import {
  store
} from "./store/index.js"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueScroller from 'vue-scroller'
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(VueX)
Vue.use(VueScroller)
Vue.config.productionTip = false
// 组件引入
import home from './components/home/home.vue'
import video from './components/video/video.vue'
import my from './components/my/my.vue'
import wenews from './components/wenews/wenews.vue'
import guanzhu from './components/home/guanzhu.vue'
import tuijian from './components/home/tuijian.vue'
//路由设计
var routes = [{
  path: '/home',
  component: home,
  children: [{
      path: 'guanzhu',
      component: guanzhu
    }, {
      path: 'tuijian',
      component: tuijian
    }
  ]
}, {
  path: '/video',
  component: video
}, {
  path: '/wenews',
  component: wenews
}, {
  path: '/my',
  component: my
}];
var router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
router.push('home/tuijian');
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
// 全局指令
Vue.directive('totime', {
  inserted: function(el) {
    var date = new Date();
    var currentTime = date.getTime().toString().substring(0, 10);
    var publishTime = parseInt(el.innerHTML);
    var timeAgo = parseInt(currentTime - publishTime);
    var checkDay = timeAgo / (3600 * 24);
    var checkHour = timeAgo / 3600;
    var checkMinutes = timeAgo / 60;
    if (checkDay >= 1) {
      el.innerHTML = parseInt(checkDay) + '天以前'
    } else if (checkDay < 1 && checkHour >= 1) {
      el.innerHTML = parseInt(checkHour) + '小时以前'
    } else if (checkHour < 1 && checkMinutes >= 1) {
      el.innerHTML = parseInt(checkMinutes) + '分钟以前'
    } else {
      el.innerHTML = parseFloat(timeAgo) + '秒以前'
    }
  }
})
