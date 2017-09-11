import * as quizHelper from './../../../src/assets/lib/quiz-helper'

/* global describe, it, expect */

describe('quiz-helper.js', () => {
  describe('#countProgress', () => {
    it('should return 10 the minimum progress count', () => expect(quizHelper.countProgress()).to.equal(10))

    it('should return 50 the maximum progress count', () => expect(quizHelper.countProgress(5, 5)).to.equal(50))

    it('should return 20 for 1/4 progress count', () => expect(quizHelper.countProgress(1, 4)).to.equal(20))
  })

  describe('#navigationsOnPage', () => {
    it('should contain 5 items as 5 navigation buttons', () => expect(quizHelper.navigationsOnPage('quiz-start')).to.have.length(5))

    it('should contain start quiz button', () => expect(quizHelper.navigationsOnPage('quiz-start')).to.contain('quiz-start-button'))

    it('should not contain goto previous/next button on quiz start', () => expect(quizHelper.navigationsOnPage('quiz-start'))
      .to.not.include('quiz-goto-prev-button')
      .and.not.include('quiz-goto-next-button'))

    it('should contain goto next/prev button on question page', () => expect(quizHelper.navigationsOnPage('quiz-question'))
      .to.contain('quiz-goto-prev-button')
      .and.contain('quiz-goto-next-button'))
  })

  describe('#getNPerAllDependsOnMinMax', () => {
    it('should return 0 (min) when 0/anyNumber on min = 0', () =>
      expect(quizHelper.getNPerAllDependsOnMinMax(0, 14, 0, 10))
      .to.equal(0))

    it('should return 100 (max) when x/x on max = 100', () => expect(quizHelper.getNPerAllDependsOnMinMax(5, 5, 12, 100)).to.equal(100))

    it('should return 60 (max) when 3/10 on min 0, max 200', () => expect(quizHelper.getNPerAllDependsOnMinMax(3, 10, 0, 200)).to.equal(60))

    it('should return 130 (max) when 3/10 on min 100, max 200', () => expect(quizHelper.getNPerAllDependsOnMinMax(3, 10, 100, 200)).to.equal(130))

    it('should return 30 when 3/10 on 0~100 as in percent %', () => expect(quizHelper.getNPerAllDependsOnMinMax(3, 10, 0, 100)).to.equal(30))
  })
})
