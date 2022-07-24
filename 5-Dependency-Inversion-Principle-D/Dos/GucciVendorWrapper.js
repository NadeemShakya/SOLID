const GucciAPI = require("./GucciAPI");

module.exports = class  {
  constructor(vendor) {
    this.vendor = new GucciAPI();
  }

  placeOrder(quantity, item) {
    this.vendor.placeOrder(quantity, item);
  }
};
