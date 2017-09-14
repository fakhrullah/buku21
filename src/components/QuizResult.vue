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
    <div v-show="countingPercent < 100" class="loading counting progressbar">
      <bui-progress :value="countingPercent" max="100"></bui-progress>
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
import { getPercentage } from './../assets/lib/quiz-helper'
import BuiProgress from '@/components/ui/BuiProgress'

export default {
  name: 'quiz-result',
  components: { BuiProgress },
  props: ['countingPercent', 'correct', 'wrong', 'unanswered'],
  computed: {
    markInPercentage () {
      let value = getPercentage(this.correct, this.questionsSum)
      return `${value} %`
    },
    questionsSum () {
      return this.correct + this.wrong + this.unanswered
    }
  }
}
</script>

<style lang="postcss">
.counting.progressbar {
  margin: var(--ws-xl) var(--ws-l);

  .progress {
    height: var(--ws-l);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .progress-bar {
    background-color: rgba(255, 255, 255, 0.6);
  }
}

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
