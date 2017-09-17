import Vue from 'vue'
import QuizResultPage from '@/components/QuizResult'

/* global describe, it, expect */
describe('QuizResult.vue', () => {
  describe('Quiz result page before count mark', function () {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({}).$mount()

    it('should render a progressbar as loading for count mark progress',
      () => expect(vm.$el.querySelectorAll('.quiz-result .counting.progressbar .progress').length)
        .to.equal(1))

    // Do not need test progressbar value because using custom component

    it('should not display mark in percentage',
      () => expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
        .to.equal('none'))

    it('should not display mark in detail',
      () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
        .to.equal('none'))

    // TODO check slots
  })

  describe('Quiz result page when mark is counting', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 40
      }
    })
    vm.$slots = {
      default: '<div class="myslot">miaw</div>'
    }
    vm.$mount()

    it('should render counting progress bar',
      () => expect(vm.$el.querySelectorAll('.quiz-result .counting.progressbar .progress').length)
        .to.equal(1))

    it('should show counting progress bar',
      () => expect(vm.$el.querySelector('.quiz-result .counting.progressbar .progress').style.display)
        .to.not.equal('none'))

    it('should not display mark percent',
      () => expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
        .to.equal('none'))

    it('should not display mark details',
      () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
        .to.equal('none'))

    // TODO check slots
  })

  describe('When mark counting finish aka 100%', () => {
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

    it('should hide progressbar',
      () => expect(vm.$el.querySelector('.quiz-result .counting.progressbar').style.display)
        .to.equal('none'))

    it('should show mark percent',
      () => expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
        .to.equal(''))

    it('should show mark detail',
      () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
        .to.equal(''))
    // TODO check slots - use vue unit atau other lib
  })
  // it('should render quiz result page when count done, correctly', () => {
  //   const Constructor = Vue.extend(QuizResultPage)
  //   const vm = new Constructor({
  //     propsData: {
  //       countingPercent: 100,
  //       correct: 4,
  //       wrong: 6,
  //       unanswered: 0,
  //       questionsSum: 10
  //     }
  //   }).$mount()

  //   expect(vm.$el.querySelectorAll('.quiz-result .counting.progressbar').length)
  //     .to.equal(1)
  //   expect(vm.$el.querySelector('.quiz-result .counting.progressbar progress').value)
  //     .to.equal(100)
  //   expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').style.display)
  //     .to.equal('')
  //   expect(vm.$el.querySelector('.quiz-result .mark-in-detail').style.display)
  //     .to.equal('')
  // })

  describe('Quiz result page with correct and wrong but not unanswered', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 100,
        correct: 4,
        wrong: 6,
        unanswered: 0
      }
    }).$mount()

    it('should render mark in percentage correctly', () => expect(vm.$el.querySelector('.quiz-result .mark-in-percentage').textContent.trim()).to.equal('40%'))

    it('should render correct count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .correct-answers div:last-child').textContent.split('/')[0].trim()).to.equal('4'))

    it('should render wrong count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .wrong-answers div:last-child').textContent.split('/')[0].trim()).to.equal('6'))

    it('should not render unanswered', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .unanswered')).to.equal(null))
  })

  describe('Quiz result page with correct, wrong and unanswered', () => {
    const Constructor = Vue.extend(QuizResultPage)
    const vm = new Constructor({
      propsData: {
        countingPercent: 100,
        correct: 4,
        wrong: 3,
        unanswered: 3
      }
    }).$mount()

    it('should render correct count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .correct-answers div:last-child').textContent.split('/')[0].trim()).to.equal('4'))

    it('should render wrong count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .wrong-answers div:last-child').textContent.split('/')[0].trim()).to.equal('3'))

    it('should render unanswered count', () => expect(vm.$el.querySelector('.quiz-result .mark-in-detail .unanswered div:last-child').textContent.split('/')[0].trim()).to.equal('3'))
  })
  // TODO check slot
})
