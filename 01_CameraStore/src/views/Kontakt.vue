<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div class="kontaktPage">
    <h1>Kontakt</h1>
    <h2>Ich bin für sie da!</h2>
    <p>
      Name: {{ $store.getters.fullName }}<br/>
      Position: {{ $store.getters.jobPosition }}<br/>
      Email: {{ $store.getters.personEmail }}
    </p>

    <h2>Möchten sie ihre Bestellung überüprüfen?</h2>
    <p>
      <label>Ihre Auftrags Nummer lautet {{ $store.state.film }} und sie haben {{ $store.state.totalFilm }} Filme gebraucht.</label>
    </p>

    <input v-model="newOrdernumber"></input>
    <button variant="primary" @click="setOrdernumber" :disabled="!newOrdernumber">Update</button>
    <div>
      <button @click="addFilm">+ 1 Film</button>
      <button @click="removeFilm">- 1 Film</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newOrdernumber:'12345'
    }
  },
  methods: {
    setOrdernumber() {
      if(this.newOrdernumber) {
        this.$store.commit('setOrdernumber', this.newOrdernumber);
        this.newOrdernumber = '';
      }
    },
    addFilm() {
      this.$store.commit('addFilm2');
    },
    removeFilm() {
      this.$store.commit('removeFilm2');
    }
  }
}
</script>
