<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div class="kontaktPage">
    <h1>Kontakt</h1>
    <h2>Ihre Kontaktperson</h2>
    <p>
      Name: {{ $store.getters.fullName }}<br/>
      Position: {{ $store.getters.jobPosition }}<br/>
      Email: {{ $store.getters.personEmail }}
    </p>
    <h2>Bestellstatus</h2>
    <p>
      <label>Meine Bestellnummer ist {{ $store.state.burger }} und
        ich habe {{ $store.state.totalBurger }} Burger bestellt.</label>
    </p>

    <input v-model="newOrdernumber"></input>
    <button variant="primary" @click="setOrdernumber" :disabled="!newOrdernumber">Update</button>
    <div>
      <button @click="addBurger">+ 1 Burger</button>
      <button @click="removeBurger">- 1 Burger</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newOrdernumber:''
    }
  },
  methods: {
    setOrdernumber() {
      if(this.newOrdernumber) {
        this.$store.commit('setOrdernumber', this.newOrdernumber);
        this.newOrdernumber = '';
      }
    },
    addBurger() {
      this.$store.commit('addBurger2');
    },
    removeBurger() {
      this.$store.commit('removeBurger2');
    }
  }
}
</script>
