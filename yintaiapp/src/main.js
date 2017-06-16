// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Tabbar, TabItem } from 'mint-ui';



Vue.use(VueAxios, axios)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index,Swipe,SwipeItem,Tabbar, TabItem }
})
