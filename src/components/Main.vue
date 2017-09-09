<template>
  <ul class="main">
    <li  v-for="chapter in chapters"
      :key="chapter.id"
      class="chapter">
      <router-link :to="chapter.route">{{ chapter.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      chapters: [
        {
          id: 1,
          name: 'Nota utama',
          route: {
            name: 'note',
            params: {
              data: 'note-content'
            }
          }
        },
        {
          id: 2,
          name: 'Quiz',
          route: {
            name: 'quiz'
          }
        },
        {
          id: 3,
          name: 'Cerita pasal neko',
          route: {
            name: 'note',
            params: {
              data: 'note-story-of-neko'
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
ul.main {
  text-align: left;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }

  li > a {
    display: block;
    background-color: var(--gray-light-alpha);
    text-decoration: none;
    padding: var(--ws-m) var(--ws-l);
  }

  li > a:hover {
    background-color: white;
  }
}
</style>
