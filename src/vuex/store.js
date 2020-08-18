import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isBusy: false,
    sales: 0,
    products: [{
      id: '0001',
      name: 'Agua sin gas',
      stock: 30,
      price: 670
    }, {
      id: '0002',
      name: 'Leche extra proteína',
      stock: 25,
      price: 1190
    }, {
      id: '0003',
      name: 'Huevos Docena',
      stock: 10,
      price: 1590
    }, {
      id: '0004',
      name: 'Pan marraqueta integral 1kg',
      stock: 100,
      price: 990
    }, {
      id: '0005',
      name: 'Avena multisemillas',
      stock: 0,
      price: 1390
    }]
  },
  getters: { // retornamos con filter segun condicion
    availableProducts(state) {
      return state.products.filter((product) => {
        return product.stock > 0
      })
    },
    cheapProducts(state, getters) {
      return getters.availableProducts.filter((product) => {
        return product.price < 1000
      })
    },
    getProductById: (state, getters) => (id) => { //funcion que retorna funcion
      return getters.availableProducts.find((product) => {
        return product.id == id
      })
    }
  }
})

export default store 

// var car = {
//   start: function () {
//     console.log("ejemplo uno")
//   }
// }

// var car = {
//   start() {
//     console.log("ejemplo uno")
//   }
// }
