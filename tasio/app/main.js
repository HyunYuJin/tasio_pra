import Vue from 'nativescript-vue'
// import Home from './components/Home'
import Login from './components/Login'

import store from './store'

// Add Module
import RadListView from 'nativescript-ui-listview/vue';
import { CheckBox } from '@nstudio/nativescript-checkbox'

Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
Vue.registerElement(
  'CheckBox',
  () => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
);

Vue.use(RadListView);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(Login)])
}).$start()
