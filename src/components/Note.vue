<template>
  <div class="note">
    <h2 class="note-title">{{ noteTitle }}</h2>
    <div class="note-content" v-html="noteContent"></div>
  </div>
</template>

<script>
import noteContent from '../data/note-content.json'

export default {
  name: 'note',
  data () {
    return {
      noteTitle: noteContent.title,
      noteContent: noteContent.content
    }
  }
}
</script> 

<style>
.note {
  text-align: left;
}
</style>
