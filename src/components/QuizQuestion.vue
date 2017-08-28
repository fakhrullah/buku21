<template>
  <div class="quiz-page quiz-question">
    <!-- question -->
    <p>{{ question }}</p>
    <!-- answers and answering tool according to question type -->
    <div class="answering">
      <!-- TODO new component -->
      <!-- for now just expect objective type -->
      <button 
        v-for="(choice, index) in choices"
        class="choice"
        :class="{choosed: choice.isChoosed}"
        type="button"
        @click="choosed(index, $event)"
      >
        {{ choice.answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quiz-question',
  props: ['question', 'answers'],
  data () {
    return {
      choices: this.answers
    }
  },
  methods: {
    choosed (index, event) {
      this.choices.forEach(choice => {
        choice.isChoosed = false
      })
      this.choices[index].isChoosed = true
    }
  }
}
</script>

<style scoped>
.choosed {
  background-color: lightgreen;
}
</style>
