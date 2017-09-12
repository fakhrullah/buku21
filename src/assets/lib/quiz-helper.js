
/**
 * Count percentage for n-th per all (n/all)
 * when minimum is 10 and maximum is 50
 *
 * Only set progress bar from 10 to 50
 * because another 50 to 100 is for virtual progress
 *
 * @param {Number} nth N-th number as in n/all
 * @param {Number} all All number as in n/all
 */
const countProgress = (nth = 0, all = 100) => getNPerAllDependsOnMinMax(nth, all, 10, 50)

/**
 * Get n value when n/all in ratio minimum/maximum
 *
 * 3/10 is 30%
 * 3/10 when minimum is 0 and maximum 200 is 60/200
 *
 * @param {Number} n N value as in n/all
 * @param {Number} all All value as in n/all
 * @param {Number} min Minimum number in range
 * @param {Number} max Maximum number in range
 */
const getNPerAllDependsOnMinMax = (n, all, min, max) => (max - min) * (n / all) + min

/**
 * Get correct/allQuestions in percentage.
 * Round to nearest decimal for float answers
 *
 * @param {Number} n Sum of correct answers
 * @param {Number} all Sum of all questions
 */
const getPercentage = (n, all) => Math.round(n / all * 100)

/**
 * Get array of navigation button I want to show
 *
 * @param {String} quizPage Current view page name
 */
const navigationsOnPage = (quizPage) => {
  let navsButton = {
    'quiz-start': [
      'quiz-start-button'
    ],
    'quiz-question': [
      'quiz-goto-prev-button',
      'quiz-goto-next-button'
    ],
    'quiz-result': [
      'quiz-goto-prev-button',
      'quiz-get-result-button'
    ],
    'quiz-result-answer-checked': [],
    'quiz-all': [
      'quiz-start-button',
      'quiz-goto-prev-button',
      'quiz-goto-next-button',
      'quiz-get-result-button',
      'quiz-menu-button'
    ]
  }
  return navsButton[quizPage]
}

export {
  countProgress,
  getNPerAllDependsOnMinMax,
  getPercentage,
  navigationsOnPage
}
