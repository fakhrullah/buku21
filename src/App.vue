<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="postcss">
html {
  min-height: 100%;
  box-sizing: border-box;
  background-color: var(--color-primary-dark);
  background-image:
    radial-gradient(
      circle,
      var(--color-primary) 10%,
      var(--color-primary-dark)
    );

  /*
    linear-gradient(
      135deg,
      var(--color-primary-dark),
      var(--color-accent)
    );
    */
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
