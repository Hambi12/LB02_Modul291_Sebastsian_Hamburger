<template>
  <!--
  Basic router navigation
  Update navigation by adding two router links for Home and About
 -->
  <div id="app">
    <nav>
      <img class="logoMain" src="./bilder/logo.png">
      <div class="navLinks">
          <router-link to="/store">Store</router-link>
          <router-link to="/kontakt">Kontakt</router-link>
          <router-link to="/about">About</router-link>
      </div>
    </nav>

    <router-view/>

    <footer>
      <div class="adress">
        <p>Camera in One</p>
        <p>In der Weid 4</p>
        <p>8902 Urdorf</p>
        <p>Schweiz</p>
      </div>
    </footer>
  </div>
</template>

<script>
/* Import all components */
export default {
  components: {
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/style';
</style>
