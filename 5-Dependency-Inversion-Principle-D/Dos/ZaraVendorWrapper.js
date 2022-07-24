const ZaraAPI = require("./ZaraAPI");

module.exports = class  {
  constructor(vendor) {
    this.vendor = new ZaraAPI();
  }

  placeOrder(quantity, item) {
    this.vendor.placeOrder(quantity, item);
  }
};
