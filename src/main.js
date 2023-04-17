import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import './assets/css/font.css'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VueMeta)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')