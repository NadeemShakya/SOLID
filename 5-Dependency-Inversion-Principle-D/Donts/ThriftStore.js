const GucciAPI = require("./GucciAPI");
const ZaraAPI = require("./ZaraAPI");

module.exports = class ThriftStore {
  constructor(user) {
    this.user = user;
    this.zaraVendor = new ZaraAPI();
    // If the system needs to use GucciAPI.
    // DON'T: Change the existing codebase to support new feature.
    this.gucciVendor = new GucciAPI();
  }

  placeOrder(item, quantity) {
    this.zaraVendor.placeOrder(item, quantity);
    // If the system needs to use GucciAPI.
    // DON'T: Change the existing codebase to support new feature.
    this.gucciVendor.placeOrder(item, quantity);
  }

  makePaymet(amount) {
    this.zaraVendor.makePaymet(amount);
    // If the system needs to use GucciAPI.
    // DON'T: Change the existing codebase to support new feature.
    this.gucciVendor.makePaymet(amount);
  }
};
