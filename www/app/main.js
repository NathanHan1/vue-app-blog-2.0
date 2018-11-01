import Vue from 'vue';
import App from './App.vue';
import { Message, LoadingBar } from 'iview';
import './common/index.css';
import store from './store/index.js';
import router from './router/index.js';
import VueLazyload from 'vue-lazyload';

// Vue.use(iView);
Vue.use(VueLazyload, {
    preLoad: 1,
    loading: '/app/loading.gif',
    attempt: 1
});
//采用这种做全局注册，按需加载
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;
router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
});

router.afterEach(route => {
    LoadingBar.finish();
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
