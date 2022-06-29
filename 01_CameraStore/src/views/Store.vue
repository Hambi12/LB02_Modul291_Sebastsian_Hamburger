<template>
  <div class="container">
    <!-- header-->
    <header>
      <!-- hero -->
      <section class="hero">
        <div class="heroText">
          <h1 v-show="true" v-text="mainTitle">Wird geladen</h1>
          <p v-if="true" v-show="true" v-text="infoNormal">Wird geladen</p>
          <p v-else v-show="true" v-text="infoChristmas">Wird geladen</p>
        </div>
      </section>
    </header>

    <!-- main -->
    <main>
      <!-- section 1 -->
      <section class="section1">
        <!-- Kameras -->
        <section class="store">
          <h2>Store</h2><br>
          <div class="productsContainer">
            <!-- food -->
            <div class="camera">
              <h3>Kameras</h3>
              <div class="productContainer" v-for="item in cameras" :key="item">
                <div class="productSingle">{{ item.title }}</div>
                <div class="productSingle"><a @click="addToCart(item.price)">Add {{ formatPrice(item.currency, item.price) }}</a></div>
              </div>
            </div>
            <!-- Filme -->
            <div class="film">
              <h3>Filme</h3>
              <div class="productContainer" v-for="item in films" :key="item">
                <div class="productSingle">{{ item.title }}</div>
                <div class="productSingle"><a @click="addToCart(item.price)">Add {{ formatPrice(item.currency, item.price) }}</a></div>
              </div>
            </div>
          </div>
        </section>
        <!-- Einkaufswagen -->
        <section class="cart">
          <h2>Warenkorb</h2><br>
          <p>Anzahl Artikel: {{ totalItems }}</p>
          <p>Totale Miete: {{ formatPrice("CHF", totalCost) }}</p>
          <p>Eingelöste Coupons: {{ discount }}</p>
          <a @click="updatePrice">Jetzt 50% Rabatt erhalten</a>
        </section>
      </section>
      <!-- ads -->
      <section class="ads">
        <h2>Gesponserter Inhalt</h2>
        <a v-if="true"
           :href="adNormal.url"
           :target="adNormal.target"
           :tabindex="adNormal.tabindex"
        ><p v-text="adNormal.title"></p></a>
        <a v-else
           :href="adChristmas.url"
           :target="adChristmas.target"
           :tabindex="adChristmas.tabindex"
        ><p v-text="adChristmas.title"></p></a>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // Allgemeine Daten
      mainTitle: 'Film in One',
      infoNormal: 'Teste Jetzt deine Analoge Kamera und erhalte 50% Rabatt',
      infoChristmas: 'Noch kein Geschenk? Mache Weihnachten unvergesslich',
      // Werbung
      adNormal: {
        url: 'https://prismlensfx.com/',
        target: '_blank',
        tabindex: '0',
        title: 'Teste jetzt die neuen Filter',
      },
      adChristmas: {
        url: 'https://www.polarprofilters.com/',
        target: '_blank',
        tabindex: '0',
        title: 'Sei ein Pro an Weihnachten',
      },
      // alle Daten
      totalItems: 0,
      totalCost: 0,
      // Kamera Daten
      cameras: [
        {title:"Canon ae 1", currency: "CHF", price: 44.50},
        {title:"Minolta srt 101", currency: "CHF", price: 55.10},
        {title:"Praktica MTL 50", currency: "CHF", price: 30.50},
        {title:"Nikon FM2N", currency: "CHF", price: 49.95},
        {title:"Olympus mju 2", currency: "CHF", price: 69.50},
        {title:"Kodak ultra f9", currency: "CHF", price: 29.50},
      ],
      //Film Daten
      films: [
        {title:"Porta 200", currency: "CHF", price: 2.70},
        {title:"Fujifilm 200", currency: "CHF", price: 5.00},
        {title:"Kodak 400", currency: "CHF", price: 5.45},
      ],
      // Rabatt
      discount: 0,
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
