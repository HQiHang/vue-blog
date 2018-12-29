// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'
import axios from 'axios'

axios.defaults.baseURL = "https://wd1718519367wqkqyr.wilddogio.com"

Vue.use(VueRouter)

Vue.config.productionTip = false

const Router = [
  { path: '/', component: ShowBlog },
  { path: '/add', component: AddBlog },
  { path: '/blog/:id', component: SingleBlog },
  { path: '/edit/:id', component: EditBlog }
]

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: Router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
