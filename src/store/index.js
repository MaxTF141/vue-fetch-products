import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],

  },
  getters: {
    products(state){
      return state.products;
    }
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    }
  },
  actions: {
    fetchProducts(context){
      return fetch("https://maxtf141.github.io/ProductsAPI/data.json")
      .then((response)=> response.json())
      .then((data)=>{
        context.commit("setProducts", data)
      })
      .catch((err) => console.error(err));
    }
  },
  modules: {
  }
})
