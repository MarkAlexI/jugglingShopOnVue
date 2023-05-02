export const actions = {
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
};