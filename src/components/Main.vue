<template>
  <div class="contents">
    <div class="error" v-if="isError()">
      {{ this.error }}
    </div>
    <ul class="main" v-else>
      <li  v-for="chapter in enota.chapters"
        :key="chapter.id"
        class="chapter">
        <router-link :to="chapter.route">{{ chapter.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'main',
  data () {
    return {
      enota: {},
      error: 'Loading ...'
    }
  },
  methods: {
    isError () {
      if (this.error.trim() === '') return false
      else return true
    },
    getContentsData () {
      fetch('static/buku21.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.error = ''
          this.enota = data
        })
        .catch(err => {
          console.log(err)
          this.error = 'Contents file not found. Write enota.json'
        })
    }
  },
  created () {
    this.getContentsData()
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
