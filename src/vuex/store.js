import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isBusy: false,
    sales: 0,
    products: [{
      id: '0001',
      nombre: 'Agua sin gas',
      stock: 30,
      precio: 670
    }, {
      id: '0002',
      nombre: 'Leche extra proteína',
      stock: 25,
      precio: 1190
    }, {
      id: '0003',
      nombre: 'Huevos Docena',
      stock: 10,
      precio: 1590
    }, {
      id: '0004',
      nombre: 'Pan marraqueta integral 1kg',
      stock: 100,
      precio: 990
    }, {
      id: '0005',
      nombre: 'Avena multisemillas',
      stock: 0,
      precio: 1390
    }]
  },
  getters: {
    availableProducts(state) {
      return state.products.filter((product) => {
        return product.stock > 0
      })
    }
  }
})

export default store 