import Vue from 'vue'
import App from './app/App.vue'
import store from './store'
import VueI18n from 'vue-i18n'

import ElementUI from 'element-ui'
import { ElementTiptapPlugin } from 'element-tiptap'
// import ElementUI's styles
import 'element-ui/lib/theme-chalk/index.css'
// import this package's styles
import 'element-tiptap/lib/index.css'

Vue.use(VueI18n)

// use ElementUI's plugin
Vue.use(ElementUI)
// // use this package's plugin
Vue.use(ElementTiptapPlugin, {
  /* plugin options */
    lang: "en", // see i18n
    spellcheck: true, // can be overwritten by editor prop
})

Vue.config.productionTip = false

const app = new Vue({
    store,
    render: h => h(App),
}).$mount('.js-sitestories-settings-section')