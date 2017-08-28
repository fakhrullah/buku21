<template>
  <div class="quiz-welcome-page">
    <h2>{{ quizName }}</h2>
    <p>{{ questionsSum }} soalan</p>
    <p>Selamat menjawab. Semoga berjaya.</p>
  </div>
</template>

<script>
export default {
  name: 'quiz-welcome-page',
  props: ['quizName', 'questionsSum']
}
</script>

<style>

</style>
