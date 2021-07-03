import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import loading from './components/Loading'

Vue.use(Toasted)


//import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)


Vue.component('Loading',loading)



Vue.config.productionTip = false


store.dispatch('autoLogin').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});