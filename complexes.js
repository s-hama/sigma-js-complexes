module.exports = (function () {
  // constructor
  function Complex(re = 0, im = 0) {
    this.re = re;
    this.im = im;
  }

  // Define message.
  const msgs = {
    // replace: {0}: Specified value
    errNotNumeric: "{0} must be a number.",
  };

  // Get messages.
  Complex.prototype.getMsg = function (key, repArr = null) {
    const msg = msgs[key];
    return repArr
      ? msg.replace(/{(\d+)}/g, (match, i) => {
          return repArr[i] !== undefined ? repArr[i] : match;
        })
      : msg;
  };

  // Set real.
  Complex.prototype.setRe = function (value) {
    if (typeof value !== "number") {
      throw new Error(this.getMsg("errNotNumeric", ["Specified value"]));
    }
    this.re = value;
    return this;
  };

  // Set imaginary.
  Complex.prototype.setIm = function (value) {
    if (typeof value !== "number") {
      throw new Error(this.getMsg("errNotNumeric", ["Specified value"]));
    }
    this.im = value;
    return this;
  };

  return Complex;
})();
