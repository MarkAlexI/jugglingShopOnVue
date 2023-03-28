import { defineStore } from 'pinia';

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
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
  ]
  }),
  getters: {
    getProducts: (state) => {
      return state.products;
    }
  }, 
  actions: {
    
  }
});