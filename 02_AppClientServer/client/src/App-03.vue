<template>
  <div>
    <h1>WELCOME TO THE SMARTIQUE ONLINESHOP</h1>
    <div class="link"><a href="https://www.chillys.com">visit our homepage</a></div>
    <b-container fluid>
      <div class="products">
        <Products />
        <img src="./assets/bottle.png">
      </div>
      <div>
        <Cart />
      </div>
      <div>
        <Checkout />
      </div>
    </b-container>
    <footer>
      <p>Smartique AG</p>
      <p>Bahnhofstrasse 20</p>
      <p>8000 Zürich</p>
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
@import 'styles/global';
</style>