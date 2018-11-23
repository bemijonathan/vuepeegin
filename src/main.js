import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routes from './router'

Vue.config.productionTip = false
Vue.use(vueRouter)

const router = new vueRouter({
   routes: routes,
   mode:'history'
});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

// register vue router 
// ask vue to use router 
// go ahead and register routes 
//set the router and its mode 
// if routes are in another file import to main.js