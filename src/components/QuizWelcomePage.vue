<template>
  <div class="quiz-welcome-page quiz-page">
    <h2>{{ quizName }}</h2>
    <p>{{ questionsSum }} soalan</p>
    <p>Selamat menjawab. Semoga berjaya.</p>
    <slot name="startbutton"></slot>
  </div>
</template>

<script>
export default {
  name: 'quiz-welcome-page',
  props: ['quizName', 'questionsSum']
}
</script>

<style>
.quiz-page .question,
.quiz-page.quiz-welcome-page {
  margin: 0;
  padding-left: var(--ws-m);
  padding-right: var(--ws-m);
}
</style>
