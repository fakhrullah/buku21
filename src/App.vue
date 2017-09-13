<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
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
  /* font */
  font-family: var(--main-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
