<template>
  <div class="quiz-review quiz-page">
    <ul>
      <li class="question"
        v-for="(q, index) in questions">
        <!-- TODO question id -->
        <div>{{ index }}</div>
        <!-- for objecitve question -->
        <div>
          {{ q.question }}
          <div v-if="q.gotCorrect" class="user-answer-corrected">
            <span>{{ q.userAnswer }}</span>
          </div>
          <div v-else class="user-answer-wrong">
            <span>{{ q.userAnswer }}</span>
            <br>
            <span>{{ q.correctAnswer }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'quiz-review',
  props: ['questions']
}
</script>

<style>

</style>
