import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Quiz from '@/components/Quiz'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/note/:data',
      name: 'note',
      component: Note
    },
    {
      path: '/quiz/:data',
      name: 'quiz',
      component: Quiz
    }
  ]
})
