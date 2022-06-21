<template>
  <div class="container">
    <!-- header-->
    <header>
      <!-- hero -->
      <section class="hero">
        <div class="heroText">
          <h1 v-show="true" v-text="mainTitle">Loading...</h1>
          <p v-if="false" v-show="true" v-text="infoSummer">Loading...</p>
          <p v-else v-show="true" v-text="infoWinter">Loading...</p>
        </div>
      </section>
    </header>

    <!-- main -->
    <main>
      <!-- section 1 -->
      <section class="section1">
        <!-- menu -->
        <section class="menu">
          <h2>Speisekarte</h2><br>
          <div class="productsContainer">
            <!-- food -->
            <div class="productFood">
              <h3>Essen</h3>
              <div class="productContainer" v-for="item in productsFood" :key="item">
                <div class="productSingle">{{ item.title }}</div>
                <div class="productSingle"><a @click="addToCart(item.price)">Add {{ formatPrice(item.currency, item.price) }}</a></div>
              </div>
            </div>
            <!-- drinks -->
            <div class="productDrinks">
              <h3>Getränke</h3>
              <div class="productContainer" v-for="item in productsDrinks" :key="item">
                <div class="productSingle">{{ item.title }}</div>
                <div class="productSingle"><a @click="addToCart(item.price)">Add {{ formatPrice(item.currency, item.price) }}</a></div>
              </div>
            </div>
          </div>
        </section>
        <!-- cart -->
        <section class="cart">
          <h2>Warenkorb</h2><br>
          <p>Artikel: {{ totalItems }}</p>
          <p>Kosten: {{ formatPrice("CHF", totalCost) }}</p>
          <p>Coupons eingelöst: {{ discount }}</p>
          <a @click="updatePrice">50% Coupon einlösen</a>
        </section>
        <!-- most popular products -->
        <section class="mostPopularProducts">
          <h2>Am beliebtesten</h2><br>
          <ol>
            <li v-for="(item, n) in mostPopularProducts" :key="n">
              {{ item }}
            </li>
          </ol>
        </section>
      </section>
      <!-- ads -->
      <section class="ads">
        <h2>Werbung</h2>
        <a v-if="false"
           :href="adSummer.url"
           :target="adSummer.target"
           :tabindex="adSummer.tabindex"
        ><p v-text="adSummer.title"></p></a>
        <a v-else
           :href="adWinter.url"
           :target="adWinter.target"
           :tabindex="adWinter.tabindex"
        ><p v-text="adWinter.title"></p></a>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // text data
      mainTitle: 'BearBurger',
      infoSummer: 'Sommeraktion: 50% Rabatt ab CHF 10.- !',
      infoWinter: 'Jetzt Winterrabatt-Coupon einlösen!!',
      // ads data
      adSummer: {
        url: 'https://www.lipton.com/ch/de/home.html',
        target: '_blank',
        tabindex: '0',
        title: '50% Rabatt auf Lipton IceTeas!',
      },
      adWinter: {
        url: 'https://www.ovomaltine.ch/',
        target: '_blank',
        tabindex: '0',
        title: 'Das ist Ovo Werbung',
      },
      // total data
      totalItems: 0,
      totalCost: 0,
      // products data
      productsFood: [
        {title:"Cheeseburger", currency: "CHF", price: 8.50},
        {title:"Steakburger", currency: "CHF", price: 17.50},
        {title:"Vegiburger", currency: "CHF", price: 10.50},
        {title:"Doubleburger", currency: "CHF", price: 17.25},
        {title:"Pommes Klein", currency: "CHF", price: 4.00},
        {title:"Pommes Gross", currency: "CHF", price: 8.00},
      ],
      productsDrinks: [
        {title:"IceTea", currency: "CHF", price: 3.75},
        {title:"CocaCola", currency: "CHF", price: 4.25},
        {title:"Fanta", currency: "CHF", price: 3.25},
      ],
      // discount data
      discount: 0,
      // most popular products data
      mostPopularProducts: ['Cheeseburger', 'Vegiburger', 'Pommes Gross', 'IceTea', 'Pizza',],
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1
      this.totalCost = this.totalCost + n
      this.discount--;
    },
    formatPrice(currency, val) {
      return `${currency} ${val.toFixed(2)}`
    },
    updatePrice(){
      if (this.totalCost < 10) return;
      this.totalCost = this.totalCost / 2;
    }
  },
  watch: {
    'totalCost'(newVal,oldVal){
      this.discount++;
      console.log(`actual(CHF ${newVal}) and old(CHF ${oldVal}) price.`);
    }
  }
}
</script>
