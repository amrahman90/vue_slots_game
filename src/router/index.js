import Vue from 'vue'
import Router from 'vue-router'
import Slot from '@/components/Slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Slot',
      component: Slot
    }
  ]
})
