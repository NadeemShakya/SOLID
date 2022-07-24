const Vehicle = require("./Vehicle");

module.exports = class Tesla extends Vehicle {
  // DON'T: A class shouldn't be forced to have methods that it doesn't use.
  changeGear() {
    throw new Error("Cannot change gear.");
  }
};
