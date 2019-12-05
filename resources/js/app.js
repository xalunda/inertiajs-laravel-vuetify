import 'babel-polyfill'

import Vue from 'vue'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { InertiaApp } from '@inertiajs/inertia-vue'
import vuetify from '@/plugins/vuetify'

require('@/plugins/registerComponents')

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.use(InertiaApp)
Vue.use(PortalVue)
Vue.use(VueMeta)

let app = document.getElementById('app')

window.eventBus = new Vue()

window.App = new Vue({
  vuetify,

  metaInfo: {
    title: 'Loading...',
    titleTemplate: '%s • Vuetify Ping CRM',
    changed(info){
      window.App.goBack = info.goBack
      window.App.appTitle = info.titleChunk;
    }
  },

  data: vm => ({
    appTitle: 'Loading...',
    goBack: null,
    sideDrawer: null,
    flashSnackbar: false,
    flashMessage: '',
  }),

  mounted() {
    eventBus.$on('flashMessage', (value) => {
      this.flashMessage = value
      this.flashSnackbar = true
    })
  },

  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
      transformProps: props => {
        if (props.flash.success) {
          eventBus.$emit('flashMessage', props.flash.success)
        }
        return props
      },
    },
  }),
}).$mount(app)
