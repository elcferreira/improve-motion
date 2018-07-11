// promisse corrige bug ie
import 'es6-promise/auto'  // promisse

import Vue from 'vue'        // vue
import App from './App.vue'  // App


// instance
const app = new Vue({

  // render: h => h(App)
  render: function (createElement) {
    return createElement(App);
  }
}).$mount('#app')
