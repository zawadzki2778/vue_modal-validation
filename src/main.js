import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import './assets/scss/main.scss'

Vue.config.productionTip = false

// import TreeView from "@/components/TreeView.vue";
// Vue.component("tree-view", TreeView);

new Vue({
  render: h => h(App),
}).$mount('#app')
