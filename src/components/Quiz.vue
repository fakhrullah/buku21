<template>
  <div class="quiz">
    <!-- front page - contain welcome word-->
    <quiz-welcome-page
      v-show="isCurrentView('quiz-welcome-page')"
      :quiz-name="quizName"
      :questions-sum="questionsSum"></quiz-welcome-page>

    <!-- questions - contain a lot of question -->
    <quiz-question
      v-show="isCurrentView('quiz-question-' + index)"
      v-for="(q, index) in questions" 
      :key="index"
      :class="'quiz-question-' + index"
      :question="q.question"
      :qtype="q.type"
      :answers="q.answers"></quiz-question>

    <!-- result page - show how much user got correct -->
    <quiz-result
      v-show="isCurrentView('quiz-result')"
      :correct="result.correct"
      :wrong="result.wrong"
      :unanswered="result.unanswered"
      :counting-percent="result.countingProgress"
      >

      <!-- review page
        - show list of question with status correct or wrong, 
        and clickable to question page 
        and show user answer and correct answer
      -->
      <quiz-review
        v-if="result.isCalculated"
        :questions="userSubmited"
        ></quiz-review>
    </quiz-result>

    <!-- quiz navigation button. start, next, prev, count, menu -->
    <div class="quiz-navigation">
      <button v-show="isNeededNavigations('quiz-start-button')"
        class="start-quiz"
        @click="startQuiz">
        Mula
      </button>
      <button v-show="isNeededNavigations('quiz-goto-prev-button')"
        class="prev-question"
        @click="goToPreviousQuestion">
        &lt;--
      </button>
      <button v-show="isNeededNavigations('quiz-goto-next-button')"
        class="next-question"
        @click="goToNextQuestion">
        --&gt;
      </button>
      <button v-show="isNeededNavigations('quiz-get-result-button')"
        class="check-answer"
        @click="getResult">
        Kira Markah
      </button>
      <button v-show="isNeededNavigations('quiz-menu-button')"
        class="menu">
        Menu
      </button>
    </div>
  </div>
</template>

<script>
import QuizWelcomePage from '@/components/QuizWelcomePage'
import QuizQuestion from '@/components/QuizQuestion'
import QuizResult from '@/components/QuizResult'
import QuizReview from '@/components/QuizReview'

import { countProgress, navigationsOnPage } from './../assets/lib/quiz-helper'

export default {
  name: 'quiz',
  components: {
    QuizWelcomePage, QuizQuestion, QuizResult, QuizReview
  },
  data () {
    return {
      quizName: '',
      currentView: 'quiz-welcome-page',
      neededNavigationsButton: ['quiz-start-button'],
      questions: [],
      result: {
        isCalculated: false,
        correct: 0,
        wrong: 0,
        unanswered: 0,
        countingProgress: 0
      }
    }
  },
  computed: {
    questionsSum () {
      return parseInt(this.questions.length)
    },
    userSubmited () {
      let userSubmited = []
      this.questions.forEach(q => {
        let submited = {}
        submited.question = q.question
        submited.gotCorrect = false
        // only handle objective question
        q.answers.forEach(a => {
          if (a.isCorrect) submited.correctAnswer = a.answer
          if (a.isChoosed) {
            submited.userAnswer = a.answer
            if (a.isCorrect) submited.gotCorrect = true
          }
        })
        userSubmited.push(submited)
      })
      return userSubmited
    }
  },
  methods: {
    isCurrentView (view) {
      if (view === this.currentView) return true
      else return false
    },
    isNeededNavigations (navigationButton) {
      return this.neededNavigationsButton.includes(navigationButton)
    },
    getResult () {
      console.log('Get result')
      // Start counting
      this.updateProgressBar('start', 0, this.questions.length, 0)

      // Get result for objective question
      this.questions.forEach((q, index) => {
        // counting mark on n-th question
        this.updateProgressBar('counting', index + 1, this.questions.length, 1000 + (index + 1) * 1000)

        // user answered
        let isAnswered = false
        // user answered correct
        // user answered wrong
        let isCorrect = false

        q.answers.forEach(a => {
          if (a.isChoosed) {
            isAnswered = true
            if (a.isCorrect) isCorrect = true
          }
        })

        if (isAnswered) {
          if (isCorrect) this.result.correct++
          else this.result.wrong++
        } else {
          this.result.unanswered++
        }
      })

      // Finish count
      this.updateProgressBar('done', 100, 100, 1000 + this.questions.length * 1000)

      this.neededNavigationsButton = navigationsOnPage('quiz-result-answer-checked')

      // Show review
      this.result.isCalculated = true
    },
    updateProgressBar (status, nth = 0, all = 100, delay = 1000) {
      let progress
      if (status === 'start') progress = 10
      else if (status === 'done') progress = 100
      else progress = countProgress(nth, all)
      setTimeout(() => {
        this.result.countingProgress = progress
      }, delay)
    },
    startQuiz () {
      console.log('start quiz')
      this.currentView = 'quiz-question-0'
      this.neededNavigationsButton = navigationsOnPage('quiz-question')
    },
    goToNextQuestion () {
      let currentQuestionIndex = parseInt(this.currentView.split('-')[2])
      console.log('currentQuestionIndex ' + currentQuestionIndex)

      let nextIndex = currentQuestionIndex + 1
      // go to result page on last question
      if (currentQuestionIndex === this.questions.length - 1) {
        this.currentView = 'quiz-result'
        this.neededNavigationsButton = navigationsOnPage('quiz-result')
      } else {
        this.currentView = 'quiz-question-' + nextIndex
      }
    },
    goToPreviousQuestion () {
      let currentQuestionIndex

      // Prevent navigation when current view is not question
      if (this.currentView.indexOf('quiz-question') === -1) {
        // Except on result page, user can go previous question
        // to fix their answer
        if (this.currentView === 'quiz-result') {
          // move to last question
          this.currentView = 'quiz-question-' + (this.questions.length - 1)
          this.neededNavigationsButton = navigationsOnPage('quiz-question')
        }
        return
      } else {
        currentQuestionIndex = parseInt(this.currentView.split('-')[2])
      }

      console.log('currentQuestionIndex ' + currentQuestionIndex)

      let prevIndex = currentQuestionIndex - 1
      // prevent go to start page on first question
      if (currentQuestionIndex === 0) {
        console.log('this is first question!')
      } else {
        this.currentView = 'quiz-question-' + prevIndex
      }
    },
    getQuizData () {
      let filename = this.$route.params.data
      fetch('static/' + filename + '.json')
        .then(response => response.json())
        .then(data => {
          this.quizName = data.name
          this.questions = data.questions
        })
        .catch(err => {
          this.quizName = 'Error: No quiz name found'
          console.log(err)
        })
    }
  },
  created () {
    this.getQuizData()
  }
}
</script>

<style lang="postcss">
.quiz-navigation {
  button.start-quiz {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-transform: uppercase;
  }

  button.next-question,
  button.prev-question {
    width: 50%;
    margin: 0;
    position: fixed;
    bottom: 0;
  }

  button.prev-question {
    left: 0;
  }

  button.next-question {
    right: 0;
  }

  button.check-answer {
    display: block;
    margin: 0 auto;
  }
}
</style>
