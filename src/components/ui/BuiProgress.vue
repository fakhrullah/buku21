<template>
  <div class="progress">
    <span class="progress-bar" :style="{ width: width }"></span>
  </div>
</template>

<script>
import { getNPerAllDependsOnMinMax } from '../../assets/lib/quiz-helper'
export default {
  name: 'bui-progress',
  props: ['value', 'max'],
  data () {
    return {
    }
  },
  computed: {
    width () {
      return getNPerAllDependsOnMinMax(this.value, this.max, 0, 100) + '%'
    }
  }
}
</script>

<style scoped>
.progress {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.progress-bar {
  display: block;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: width 0.3s ease;
}
</style>
