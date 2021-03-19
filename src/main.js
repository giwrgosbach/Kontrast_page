import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HelloWorld from './components/HelloWorld.vue'
import Carousa from './components/Carousa.vue'
import Storm from './components/Storm.vue'
import SinglePost from './components/SinglePost.vue'
import Network from './components/Network'
import zircle from 'zircle'
import About from './components/About.vue'
import Fascism from './components/Fascism'
import No_name from './components/No_name.vue'
import 'zircle/dist/zircle.css'
import View from './components/View.vue'
import VueApollo from 'vue-apollo'
import Viewer from 'v-viewer'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import Keimena from './components/Keimena.vue'

import VuePictureSwipe from 'vue-picture-swipe';
Vue.component('vue-picture-swipe', VuePictureSwipe);
Vue.use(VuePictureSwipe)
Vue.use(CoolLightBox)
Vue.use(Viewer)
Vue.config.productionTip = false
Vue.use(zircle)


Vue.use(VueApollo)
Vue.config.productionTip = false


// Install BootstrapVue

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.use(VueRouter)





const routes = [

  {path:'/HelloWorld', component :HelloWorld },
  {path :'/', component : Carousa},
 
  {path:'/posts', component : Keimena},
  {path:'/Oxi', component :SinglePost },
  {path: '/About', component : About},
  {path: '/Network', component :Network},
  {path:'/View', component: View},
  {path: '/Fascism', component: Fascism},
  {path: '/No_name', component :No_name},
  {path: '/Storm',component : Storm}
  
]


const router = new VueRouter({
  routes: routes,
  mode: 'history',
  
  
})



Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router,


}).$mount('#app')
