module.exports = (function () {
  // constructor
  function Complex(re, im) {
    this.re = re || 0;
    this.im = im || 0;
  }

  // Define message.
  const msgs = {
    // replace: {0}: Specified value
    errNotNumeric: "{0} must be a number.",
  };

  // Get messages.
  const getMsg = (key, repArr = null) => {
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
      throw new Error(getMsg("errNotNumeric", ["Specified value"]));
    }
    this.re = value;
    return this;
  };

  // Set imaginary.
  Complex.prototype.setIm = function (value) {
    if (typeof value !== "number") {
      throw new Error(getMsg("errNotNumeric", ["Specified value"]));
    }
    this.im = value;
    return this;
  };

  return Complex;
})();
