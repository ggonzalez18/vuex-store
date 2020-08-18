<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <p v-text="busy"></p>
    <p v-text="sale"></p>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: mapState({
    busy(state) {
      let statusBusy = state.isBusy ? 'ocupado' : 'disponible'
      return `Estado ${statusBusy}`
    },
    sale(state) {
      return `El total de ventas es: ${state.sales}`
    }
  })
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
