<template>
  <div class="quiz-page quiz-question">
    <!-- question -->
    <p class="question">
      {{ question }}
    </p>
    <!-- answers and answering tool according to question type -->
    <div class="answering" 
      :class="qtype">
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
  props: ['question', 'answers', 'qtype'],
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

<style lang="postcss" scoped>
.question {
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

.objective {
  .choice {
    display: block;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 0;
    padding-right: 0;
    background-color: rgba(0,0,0,0.03);

    border-top: solid 1px rgba(0,0,0,0.05);
    border-bottom: solid 1px rgba(0,0,0,0.05);
    border-left: none;
    border-right: none;
  }

  .choosed {
    background-color: rgba(0,0,0,0.4);
    color: white;
  }
}

</style>
