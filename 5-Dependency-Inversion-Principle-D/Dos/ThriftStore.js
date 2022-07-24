module.exports = class ThriftStore {
  constructor(vendor) {
    this.vendor = vendor;
  }

  placeOrder(item, quantity) {
    this.vendor.placeOrder(quantity, item);
  }

  makePaymet(amount) {}
};
