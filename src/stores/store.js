import { defineStore } from 'pinia';

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    products: []
  }),
  getters: {
    getProducts: (state) => {
      return state.products;
    }
  }, 
  actions: {
    //getProductsFromAPI
  }
});