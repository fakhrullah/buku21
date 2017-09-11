import Vue from 'vue'
import QuizQuestionPage from '@/components/QuizQuestion'

/* global describe, it, expect */
describe('QuizQuestion.vue', () => {
  describe('Question', () => {
    const Constructor = Vue.extend(QuizQuestionPage)
    const vm = new Constructor({
      propsData: {
        question: 'Plain question.'
      }
    }).$mount()

    it('should render question', () => expect(vm.$el.querySelector('.quiz-question .question').textContent.trim()).to.equal('Plain question.'))
  })

  describe('Objective question', () => {
    const Constructor = Vue.extend(QuizQuestionPage)
    const vm = new Constructor({
      propsData: {
        question: 'Plain objective question.',
        qtype: 'objective',
        answers: [
          {
            answer: 'Wrong choice',
            isCorrect: false,
            isChoosed: false
          },
          {
            answer: 'Correct choice',
            isCorrect: true,
            isChoosed: false
          },
          {
            answer: 'Wrong choice',
            isCorrect: false,
            isChoosed: true
          }
        ]
      }
    }).$mount()

    it('should render objective question', () => expect(vm.$el.querySelector('.quiz-question .question').textContent.trim()).to.equal('Plain objective question.'))

    it('should render objective answering div', () => expect(vm.$el.querySelectorAll('.quiz-question .answering.objective').length).to.equal(1))

    it('should not render non objective answering div', () => expect(vm.$el.querySelectorAll('.quiz-question .answering.subjective').length).to.equal(0))

    it('should render choices', () => expect(vm.$el.querySelectorAll('.quiz-question .choice').length).to.equal(3))

    it('should render choosed choice', () => expect(vm.$el.querySelectorAll('.quiz-question .choice.choosed').length).to.equal(1))
  })
})
