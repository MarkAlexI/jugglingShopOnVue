import { defineStore } from 'pinia';

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    isMobile: false,
    isDesktop: true,
    searchValue: '',
    products: [
    {
      "image": "1.jpg",
      "name": "Knives",
      "price": 100,
      "article": "K1",
      "available": true,
      "category": "Knives"
    },
    {
      "image": "2.jpg",
      "name": "Kettle",
      "price": 200,
      "article": "K2",
      "available": true,
      "category": "Kettle"
    },
    {
      "image": "3.jpg",
      "name": "Rings",
      "price": 300,
      "article": "R1",
      "available": false,
      "category": "Rings"
    },
    {
      "image": "4.jpg",
      "name": "Ball",
      "price": 150,
      "article": "B1",
      "available": true,
      "category": "Ball"
    },
    {
      "image": "5.jpg",
      "name": "Ball",
      "price": 250,
      "article": "B2",
      "available": false,
      "category": "Ball"
    },
    {
      "image": "6.jpg",
      "name": "Ball",
      "price": 180,
      "article": "B3",
      "available": true,
      "category": "Ball"
    }
  ],
  cart: []
  }),
  getters: {
    getIsMobile: (state) => {
      return state.isMobile;
    },
    getIsDesktop: (state) => {
      return state.isDesktop;
    },
    getSearchValue: (state) => {
      return state.searchValue;
    },
    getProducts: (state) => {
      return state.products;
    },
    getCart: (state) => {
      return state.cart;
    }
  }, 
  actions: {
    switchMobile() {
      this.isMobile = true;
      this.isDesktop = false;
    },
    switchDesktop() {
      this.isMobile = false;
      this.isDesktop = true;
    },
    setSearchValue(value) {
      this.searchValue = value;
    },
    addToCart(product) {
      if (this.cart.length) {
        let isProductExist = false;
        this.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExist = true;
          }
        });
        if (!isProductExist) {
          this.cart.push(product);
        }
      } else {
        this.cart.push(product);
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    decrementCartItem(index) {
      if (this.cart[index]['quantity'] > 1) {
        this.cart[index]['quantity']--;
      }
    },
    incrementCartItem(index) {
      this.cart[index]['quantity']++;
    }
  }
});