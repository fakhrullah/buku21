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
    text-decoration: none;
    padding: var(--ws-l);

    /* color */
    background-color: var(--color-primary);
    color: white;
    background-image:
      linear-gradient(
        to top,
        var(--color-primary-dark-near),
        var(--color-primary)
      );

    /* font */
    text-transform: uppercase;
    font-family: --font-sans;
    font-size: 0.8em;
    font-weight: bold;
    letter-spacing: 0.06em;
    text-shadow: 1px 1px 0 var(--gray);
  }

  .chapter > a:hover {
    background-color: var(--color-primary-dark);
    background-image:
      linear-gradient(
        to top,
        var(--color-primary-light-near),
        var(--color-primary)
      );
  }
}
</style>
