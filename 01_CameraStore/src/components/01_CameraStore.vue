<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
    goBack() {
      this.$router.go(-1);
    }, goForward() {
      this.$router.go(1);
    }
  }
}
</script>