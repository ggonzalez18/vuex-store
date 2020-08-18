<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-text="busy"></p>
    <p v-text="totalSale"></p>

    <input type="text" placeholder="Buscar" v-model="search">
    <ul v-if="searchById">
      <li>{{searchById.name}}</li>
      </ul>
    <ul v-else>
      <li v-for="(product, index) in availableProducts" :key="index">{{product.name}}</li>
    </ul>
    <p><b>Ofertas de ultimo Minuto</b></p>
    <ul>
      <li v-for="(product, index) in cheapProducts" :key="index">{{product.name}}: $ {{product.price}}</li>
    </ul>
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      search: null
    }
  },
  computed: {
    ...mapState(["isBusy", "sales"]),
     // permite acceder a los metodos sin tanta busqueda (this.bla bla) referenciando al store y variable state
     ...mapGetters(['availableProducts', 'cheapProducts', 'getProductById']),
    busy() {
      let statusBusy = this.isBusy ? 'ocupado' : 'disponible'
      return `Estado ${statusBusy}`
    },
    totalSale() {
      return `El total de ventas es: ${this.sales}`
    },
    searchById() {
      return this.getProductById(this.search)
    }
  }
}

</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
