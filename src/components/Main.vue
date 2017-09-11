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
import * as enota from './../data/enota.json'

export default {
  name: 'main',
  data () {
    return enota
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
