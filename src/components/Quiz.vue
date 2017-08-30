<template>
  <div class="quiz">
    <!-- front page - contain welcome word-->
    <quiz-welcome-page
      v-if="isCurrentView('quiz-welcome-page')"
      :quiz-name="quiz.name"
      :questions-sum="questionsSum"></quiz-welcome-page>
    <!-- questions - contain a lot of question -->
    <quiz-question
      v-for="q in questions" 
      :question="q.question"
      :answers="q.answers"></quiz-question>
      <!-- question 1 -->
      <!-- question 2 -->
      <!-- question 3 -->
      <!-- question 4 -->
      <!-- question 5 -->
    <!-- result page - show how much user got correct -->
    <quiz-result
      :mark="result.mark"
      :counting-percent="result.countingProgress"
      ></quiz-result>
    <!-- review page - show list of question with status correct or wrong, 
    and clickable to question page 
    and show user answer and correct answer -->
    <quiz-review
      :questions="userSubmited"
      ></quiz-review>
    <!-- quiz navigation button. start, next, prev, count, review, menu -->
    <button class="count" @click="getResult">Count</button>
  </div>
</template>

<script>
import QuizWelcomePage from '@/components/QuizWelcomePage'
import QuizQuestion from '@/components/QuizQuestion'
import QuizResult from '@/components/QuizResult'
import QuizReview from '@/components/QuizReview'

export default {
  name: 'quiz',
  components: {
    QuizWelcomePage, QuizQuestion, QuizResult, QuizReview
  },
  data () {
    return {
      quiz: {
        name: 'Kuiz Sejarah'
      },
      currentView: 'quiz-welcome-page',
      questions: [
        {
          type: 'objective',
          question: 'Yang manakah benar tentang Tun Mahathir Mohamad?',
          answers: [
            {
              answer: 'Pernah menjadi Menteri Besar Terengganu',
              isCorrect: false,
              isChoosed: false
            },
            {
              answer: 'Pernah menjadi Yang Dipertuan Agong malaysia',
              isCorrect: false,
              isChoosed: false
            },
            {
              answer: 'Pernah menjadi Perdana menteri Malaysia',
              isCorrect: true,
              isChoosed: false
            }
          ]
        },
        {
          type: 'objective',
          question: 'Yang manakah benar tentang Tun Hussein Onn?',
          answers: [
            {
              answer: 'Perdana menteri Malaysia pertama',
              isCorrect: false,
              isChoosed: false
            },
            {
              answer: 'Perdana menteri Malaysia kedua',
              isCorrect: true,
              isChoosed: false
            },
            {
              answer: 'Perdana menteri Malaysia ketiga',
              isCorrect: false,
              isChoosed: false
            }
          ]
        },
        {
          type: 'objective',
          question: 'Adakah betul sama maksud dengan benar?',
          answers: [
            {
              answer: 'Betul',
              isCorrect: true,
              isChoosed: false
            },
            {
              answer: 'Salah',
              isCorrect: false,
              isChoosed: false
            }
          ]
        }
      ],
      result: {
        mark: 0,
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
    getResult () {
      console.log('miaw')
      // Start counting
      this.updateProgressBar('start', 0, this.questions.length, 1000)

      // Get result for objective question
      this.questions.forEach((q, index) => {
        // counting mark on n-th question
        this.updateProgressBar('counting', index + 1, this.questions.length, 1000 + (index + 1) * 1000)

        q.answers.forEach(a => {
          if (a.isChoosed) {
            if (a.isCorrect) this.result.mark++
          }
        })
      })

      // Finish count
      this.updateProgressBar('done', 100, 100, 1000 + this.questions.length * 1000)
    },
    updateProgressBar (status, nth = 0, all = 100, delay = 1000) {
      let progress
      if (status === 'start') progress = 10
      else if (status === 'done') progress = 100
      else progress = countProgress(nth, all)
      setTimeout(() => {
        this.result.countingProgress = progress
      }, delay)
    }
  }
}

function countProgress (nth = 0, all = 100) {
  // Only set progress bar from 10 to 50
  // because another 50 to 100 is for virtual progress
  let minProgress = 10
  let maxProgress = 50
  let progress = (maxProgress - minProgress) * (nth / all) + minProgress
  return progress
}
</script>

<style>

</style>
