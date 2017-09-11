import Vue from 'vue'
import QuizResultPage from '@/components/QuizResult'

/* global describe, it, expect */
describe('QuizResult.vue', () => {
  it('should render quiz result page before count mark correctly', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({}).$mount()

    expect(vm.$el.querySelectorAll('.quiz-result .counting.progressbar').length)
      .to.equal(1)
    expect(vm.$el.querySelector('.quiz-result .counting.progressbar progress').value)
      .to.equal(0)
    expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
      .to.equal('none')
    expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
      .to.equal('none')
  })

  it('should render quiz result page when count mark correctly', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 40
      },
      template: '<quiz-result><div class="myslot">myslot</div></quiz-result>'
    }).$mount()
    expect(vm.$el.querySelectorAll('.quiz-result .counting.progressbar').length)
      .to.equal(1)
    expect(vm.$el.querySelector('.quiz-result .counting.progressbar progress').value)
      .to.equal(40)
    expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
      .to.equal('none')
    expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
      .to.equal('none')
  })

  it('should render quiz result page when count done, correctly', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 100,
        correct: 4,
        wrong: 6,
        unanswered: 0,
        questionsSum: 10
      }
    }).$mount()

    expect(vm.$el.querySelectorAll('.quiz-result .counting.progressbar').length)
      .to.equal(1)
    expect(vm.$el.querySelector('.quiz-result .counting.progressbar progress').value)
      .to.equal(100)
    expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
      .to.equal('')
    expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
      .to.equal('')
  })

  describe('Quiz result page with correct and wrong but not unanswered', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 100,
        correct: 4,
        wrong: 6,
        unanswered: 0,
        questionsSum: 10
      }
    }).$mount()

    it('should render mark in percentage correctly', () => expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').textContent.trim()).to.equal('40 %'))

    it('should render correct count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .correct-answers div:last-child').textContent).to.equal('4'))

    it('should render wrong count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .wrong-answers div:last-child').textContent).to.equal('6'))

    it('should not render unanswered', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .unanswered')).to.equal(null))
  })

  describe('Quiz result page with correct, wrong and unanswered', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 100,
        correct: 4,
        wrong: 3,
        unanswered: 3,
        questionsSum: 10
      }
    }).$mount()

    it('should render correct count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .correct-answers div:last-child').textContent).to.equal('4'))

    it('should render wrong count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .wrong-answers div:last-child').textContent).to.equal('3'))

    it('should render unanswered count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .unanswered div:last-child').textContent).to.equal('3'))
  })
  // TODO check slot
})
