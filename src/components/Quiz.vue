<template>
  <div class="quiz">
    <!-- front page - contain welcome word-->
    <quiz-welcome-page
      v-if="isCurrentView('quiz-welcome-page')"
      :quiz-name="quiz.name"
      :questions-sum="questionsSum"></quiz-welcome-page>
    <!-- questions - contain a lot of question -->
      <!-- question 1 -->
      <!-- question 2 -->
      <!-- question 3 -->
      <!-- question 4 -->
      <!-- question 5 -->
    <!-- result page - show how much user got correct -->
    <!-- review page - show list of question with status correct or wrong, 
    and clickable to question page 
    and show user answer and correct answer -->
    <!-- quiz navigation button. start, next, prev, count, review, menu -->
  </div>
</template>

<script>
import QuizWelcomePage from '@/components/QuizWelcomePage'

export default {
  name: 'quiz',
  components: {
    QuizWelcomePage
  },
  data () {
    return {
      quiz: {
        name: 'Kuiz Sejarah'
      },
      currentView: 'quiz-welcome-page',
      questions: []
    }
  },
  computed: {
    questionsSum () {
      return parseInt(this.questions.length)
    }
  },
  methods: {
    isCurrentView (view) {
      if (view === this.currentView) return true
      else return false
    }
  }
}
</script>

<style>

</style>
