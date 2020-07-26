import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/**
 * vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），
 * vue模块的package.json的main字段默认为runtime模式， 
 * 指向了"dist/vue.runtime.common.js"位置。
 */
/* compiler 模式 */
// new Vue({
//   el: '#app',
//   routes,
//   template: '<App />',
//   component: App
// })

/* runtime 模式 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
