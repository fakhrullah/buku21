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
.main {
  text-align: left;
  padding: 0;
  margin: 0;

  .chapter {
    list-style: none;
  }

  .chapter > a {
    display: block;
    background-color: var(--color-bg-primary);
    color: var(--color-fg-primary);
    text-decoration: none;
    padding: var(--ws-m) var(--ws-l);
  }

  .chapter > a:hover {
    background-color: var(--color-bg-primary-dark);
  }
}
</style>
