<template>
  <div class="note">
    <h2 class="note-title">{{ note.title }}</h2>
    <div class="note-content" v-html="note.content"></div>
  </div>
</template>

<script>
export default {
  name: 'note',
  data () {
    return {
      note: {
        title: 'Loading data ...',
        content: '<p>Loading content ...<p>'
      }
    }
  },
  methods: {
    getNoteData () {
      let noteFile = this.$route.params.data
      // let self = this
      fetch('static/' + noteFile + '.json')
        .then(response => {
          // this.note.title = response.json().title
          // console.log(response.json())
          return response.json()
        })
        .then(data => {
          // console.log(data.title)
          // console.log(data.content)
          this.note = data
        })
        .catch(err => {
          console.log(err)
          this.note = {
            title: 'Error: No file',
            content: '<p>Error: No content</p>'
          }
        })
    }
  },
  created () {
    this.getNoteData()
  }
}
</script> 

<style>
.note {
  text-align: left;
}
</style>
