export const getters = {
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
};