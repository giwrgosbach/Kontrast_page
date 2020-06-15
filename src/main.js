import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HelloWorld from './components/HelloWorld.vue'
import Carousa from './components/Carousa.vue'
import Posts from './components/Posts.vue'
import SinglePost from './components/SinglePost.vue'
import store from './store'
import { createProvider } from './vue-apollo'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPH_CMS_URI,
});

Vue.use(VueApollo)
Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
// Install BootstrapVue

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.use(VueRouter)





const routes = [

  {path:'/HelloWorld', component :HelloWorld },
  {path :'/', component : Carousa},
  {path:'/Κείμενα', component : Posts},
  {path:'/Oxi', component :SinglePost },
]


const router = new VueRouter({
  routes: routes,
  mode: 'history',
  
})



Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router,
  provide: apolloProvider,
  apolloProvider: createProvider(),
  store :store
}).$mount('#app')
