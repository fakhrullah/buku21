import Vue from 'vue'
import QuizWelcomePage from '@/components/QuizWelcomePage.vue'

/* global describe, it, expect */
describe('QuizWelcomePage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(QuizWelcomePage)
    const vm = new Constructor({
      propsData: {
        quizName: 'Kuiz Hoit',
        questionsSum: 7
      }
    }).$mount()
    expect(vm.$el.querySelector('.quiz-welcome-page h2').textContent)
      .to.equal('Kuiz Hoit')
    expect(vm.$el.querySelector('.quiz-welcome-page p:nth-child(2)').textContent)
      .to.equal('7 soalan')
  })
})
