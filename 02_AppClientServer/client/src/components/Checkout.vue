<template>
  <div>
    <h2>Kasse</h2>
  Total CHF {{ cartTotal.toFixed(2) }}
    <b-button variant="primary" @click="checkout">Bezahlen</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      if (this.cartTotal > 0) alert('Vielen Dank für ihre Bestellung');
      else alert('Bitte fügen sie ein Produkt hinzu')
    }
  }
}
</script>