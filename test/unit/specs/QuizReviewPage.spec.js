import Vue from 'vue'
import QuizReviewPage from '@/components/QuizReview'

/* global describe, it, expect */
describe('QuizReview.vue', () => {
  it('should render objective quiz correct when user submit correct answer', () => {
    const Constructor = Vue.extend(QuizReviewPage)
    const vm = new Constructor({
      propsData: {
        questions: [
          {
            question: 'Short simple one line question.',
            gotCorrect: true,
            correctAnswer: 'correct answer',
            userAnswer: 'correct answer'
          }
        ]
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.questions-list .question').length)
      .to.equal(1)
    expect(vm.$el.querySelector('.questions-list .question .user-answer-status span').textContent)
      .to.equal('Tahniah! Anda jawab betul.')
    expect(vm.$el.querySelector('.questions-list .question .question-body').textContent.trim())
      .to.equal('Short simple one line question.')
    expect(vm.$el.querySelector('.questions-list .question .question-answer.correct-answer').textContent.trim())
      .to.equal('correct answer')
    expect(vm.$el.querySelector('.questions-list .question .question-answer.wrong-answer'))
      .to.equal(null)
  })

  it('should render objective quiz correct when user submit wrong answer', () => {
    const Constructor = Vue.extend(QuizReviewPage)
    const vm = new Constructor({
      propsData: {
        questions: [
          {
            question: 'Short simple one line question.',
            gotCorrect: false,
            correctAnswer: 'correct answer',
            userAnswer: 'wrong answer'
          }
        ]
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.questions-list .question').length)
      .to.equal(1)
    expect(vm.$el.querySelector('.questions-list .question .user-answer-status span').textContent)
      .to.equal('Opps! Anda jawab salah.')
    expect(vm.$el.querySelector('.questions-list .question .question-body').textContent.trim())
      .to.equal('Short simple one line question.')
    expect(vm.$el.querySelector('.questions-list .question .question-answer.correct-answer').textContent.trim())
      .to.equal('correct answer')
    expect(vm.$el.querySelector('.questions-list .question .question-answer.wrong-answer').textContent.trim())
      .to.equal('wrong answer')
  })

  it('should render objective quiz correct when user submit unanswered question', () => {
    const Constructor = Vue.extend(QuizReviewPage)
    const vm = new Constructor({
      propsData: {
        questions: [
          {
            question: 'Short simple one line question.',
            gotCorrect: false,
            correctAnswer: 'correct answer'
          }
        ]
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.questions-list .question').length)
      .to.equal(1)
    expect(vm.$el.querySelector('.questions-list .question .user-answer-status span').textContent)
      .to.equal('Hmm... Anda tak jawab.')
    expect(vm.$el.querySelector('.questions-list .question .question-body').textContent.trim())
      .to.equal('Short simple one line question.')
    expect(vm.$el.querySelector('.questions-list .question .question-answer.correct-answer').textContent.trim())
      .to.equal('correct answer')
    expect(vm.$el.querySelector('.questions-list .question .question-answer.wrong-answer'))
      .to.equal(null)
  })
})
