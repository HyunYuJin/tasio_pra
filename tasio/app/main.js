import Vue from 'nativescript-vue'
import Home from './components/Home'

import store from './store'

// Add Module
import RadListView from 'nativescript-ui-listview/vue';


Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)

Vue.use(RadListView);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(Home)])
}).$start()
