<template>
  <div class="quiz-result quiz-page">
    <!-- result is counting view 
        - take random from 3-10 seconds for count marks
        - for real time spends for counting mark will depend on data structure and how many data
        - BUT making it look like take some time to count will make it look like
        - it working hard to count marks
        - Those will make user feel good for doing hard work
        - Never show result instantly
    -->
    <div v-show="countingPercent < 100" class="loading counting">
      <progress :value="countingPercent" max="100"></progress>
    </div>

    <!-- show marks -->
    <div v-show="countingPercent >= 100" class="mark-in-percentage">
      {{ markInPercentage }}
    </div>

    <div v-show="countingPercent >= 100" class="mark-in-detail">
      <div class="correct-answers">
        <div>BETUL</div>
        <div>{{ correct }}</div>
      </div>
      <div class="wrong-answers">
        <div>SALAH</div>
        <div>{{ wrong }}</div>
      </div>
      <div v-if="unanswered" class="unanswered">
        <div>TAK JAWAB</div>
        <div>{{ unanswered }}</div>
      </div>
    </div>

    <slot v-if="countingPercent >= 100"></slot>

  </div>
</template>

<script>
export default {
  name: 'quiz-result',
  props: ['countingPercent', 'correct', 'wrong', 'unanswered', 'questionsSum'],
  computed: {
    markInPercentage () {
      let value = (this.correct / this.questionsSum) * 100
      return `${value} %`
    }
  }
}
</script>

<style>
.mark-in-percentage {
  font-size: 300%;
  margin-top: var(--ws-xl);
  margin-bottom: var(--ws-xl);
}

.mark-in-detail {
  display: flex;
  margin-bottom: var(--ws-xl);

  div {
    flex-grow: 1;
  }
}
</style>
