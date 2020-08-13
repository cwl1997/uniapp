import Vue from 'vue'
import App from './App'
import selectdown from '@/components/selectdown/selectdown.vue'
Vue.component('selectdown',selectdown);
import pullup from '@/components/PullUpReload/PullUpReload.vue'
Vue.component('pullup',pullup);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
