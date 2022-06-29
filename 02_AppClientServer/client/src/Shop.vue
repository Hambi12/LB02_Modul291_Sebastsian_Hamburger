<template>
  <div>
    <h1>Film in One All for you</h1>
    <p>Rent your Film camera in One Place</p>
    <b-container fluid>
      <div>
        <Products />
      </div>
      <div>
        <Cart />
      </div>
      <div>
        <Checkout />
      </div>
    </b-container>
    <footer>
      <p class="footer">Film in One</p>
      <p class="footer">Im Geren 35</p>
      <p class="footer">8902 Urdorf</p>
    </footer>
  </div>
</template>
<script>
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
export default {
  name: 'app',
  components: {
    Products, Cart, Checkout
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/style.css';
</style>