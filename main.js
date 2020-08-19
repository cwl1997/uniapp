import Vue from 'vue'
import App from './App'
import selectdown from '@/components/selectdown/selectdown.vue'
Vue.component('selectdown',selectdown);
import pullup from '@/components/PullUpReload/PullUpReload.vue'
Vue.component('pullup',pullup);
import xlCollapse from '@/components/cl-collapse/cl-collapse.vue'
Vue.component('xlCollapse',xlCollapse);
import wlTabbar from '@/components/wl-tabbar/wl-tabbar.vue'
Vue.component('wl-tabbar',wlTabbar);
import wlTabbarItem from '@/components/wl-tabbar/wl-tabbar-item.vue'
Vue.component('wl-tabbar-item',wlTabbarItem);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
