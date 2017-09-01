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
    <div class="loading counting">
      <progress :value="countingPercent" max="100"></progress>
    </div>

    <!-- show marks -->
    <div class="mark">
      {{ mark }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'quiz-result',
  props: ['countingPercent', 'mark']
}
</script>

<style>

</style>
