import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/Quiz'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/nota',
      name: 'Note',
      component: Note
    }
  ]
})
