const ThriftStore = require("./ThriftStore");
const ZaraVendorWrapper = require("./ZaraVendorWrapper");
const GucciVendorWrapper = require("./GucciVendorWrapper");

const nadeem = new ThriftStore(new ZaraVendorWrapper());
const ram = new ThriftStore(new GucciVendorWrapper());

nadeem.placeOrder(10, "Pants");
ram.placeOrder(1, "Blazer");
