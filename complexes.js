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
  Complex.prototype.setRe = function (re) {
    if (typeof re !== "number") {
      throw new Error(this.getMsg("errNotNumeric", ["Specified real value"]));
    }
    this.re = re;
    return this;
  };

  // Set imaginary.
  Complex.prototype.setIm = function (im) {
    if (typeof im !== "number")
      throw new Error(
        this.getMsg("errNotNumeric", ["Specified imaginary value"])
      );
    this.im = im;
    return this;
  };

  // Set complex number from rectangular coordinates.
  Complex.prototype.setRectCoords = function (re, im) {
    if (typeof re !== "number" || typeof im !== "number")
      throw new Error(
        this.getMsg("errNotNumeric", [
          "Specified real value and imaginary value",
        ])
      );
    this.re = re;
    this.im = im;
    return this;
  };

  // Set complex number from polar coordinates.
  Complex.prototype.setPolarCoords = function (r, phi) {
    if (typeof r !== "number" || typeof phi !== "number")
      throw new Error(
        this.getMsg("errNotNumeric", [
          "Specified r(radius) value and phi(angle) value",
        ])
      );
    return this.setRectCoords(r * Math.cos(phi), r * Math.sin(phi));
  };

  // Set complex number with specified precision.
  Complex.prototype.setPrecision = function (prec) {
    if (typeof prec !== "number")
      throw new Error(
        this.getMsg("errNotNumeric", ["Specified precision value"])
      );
    return this.setRectCoords(
      Number(this.re.toPrecision(prec)),
      Number(this.im.toPrecision(prec))
    );
  };

  // Set complex number with specified digits.
  Complex.prototype.setFixed = function (digs) {
    if (typeof digs !== "number") {
      throw new Error(this.getMsg("errNotNumeric", ["Specified digs value"]));
    }
    return this.setRectCoords(
      Number(this.re.toFixed(digs)),
      Number(this.im.toFixed(digs))
    );
  };

  return Complex;
})();
