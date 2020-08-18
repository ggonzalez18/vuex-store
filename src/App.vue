<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-text="busy"></p>
    <button @click.prevent="toggleBusy" class="btn btn-dark mb-3">Cambio</button>
    <p v-text="totalSale"></p>

    <input type="text" placeholder="Buscar" v-model="search" class="mb-4" width="300px">
    <ul v-if="searchById">
      <li class="list-group-item">{{searchById.name}}</li>
    </ul>

    <ul v-else>
      <li v-for="(product, index) in availableProducts" :key="index" class="list-group-item">
        {{product.name}} - Cantidad: {{product.stock}}
        <button @click.prevent="addStock(product)" class="btn btn-secondary btn-sm">+</button>
      </li>
    </ul>

    <p class="list-group-item active">OFERTAS DE ULTIMO MINUTO</p>
    <ul>
      <li v-for="(product, index) in cheapProducts" :key="index" class="list-group-item">
        {{product.name}}: <b>${{product.price}}</b></li>
    </ul>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      search: null
    }
  },
  methods: {
...mapActions(["toggleBusy","addStock"])
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
