<template>
  <div>
    <h2>Checkout</h2>
    Total CHF {{ cartTotal.toFixed(2) }}.
    <b-button variant="primary" @click="checkout">Zur Kasse</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      if (this.cartTotal > 0) alert('Checkout processed!');
      else alert('Please add a product!')
    }
  }
}
</script>