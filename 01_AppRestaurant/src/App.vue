<template>
  <!--
  Basic router navigation
  Update navigation by adding two router links for Home and About
 -->
  <div id="app">
    <nav>
      <img class="logoMain" src="./assets/logo-main.png">
      <div class="navLinks">
          <router-link to="/home">Home</router-link>
          <router-link to="/kontakt">Kontakt</router-link>
          <router-link to="/about">About</router-link>
      </div>
    </nav>

    <router-view/>

    <footer>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.9966101811624!2d8.48613843141203!3d49.52233969566677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cfb3ef24d899%3A0xacd2bf9a4e337163!2sBaba%20Burger%20Mannheim!5e0!3m2!1sde!2sch!4v1654971666968!5m2!1sde!2sch" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="adress">
        <p>BearBurger AG</p>
        <p>Bahnhofstrasse 12</p>
        <p>8000 Zürich</p>
        <p>Switzerland</p>
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
@import 'styles/global';
</style>
