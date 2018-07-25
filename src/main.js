// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import vueResource from 'vue-resource';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(vueResource);
window.evenBus = new Vue();

const routes = [
  {path: '/', redirect: '/goods/:seller'},
  {path: '/goods/:seller', component: goods, name: 'goods'},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new Router({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
