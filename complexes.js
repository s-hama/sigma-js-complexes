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
    // replace: {0}: Specified value
    errTypeInvalid: "The type of the {0} is invalid.",
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
  Complex.prototype.rectCoords = function (re, im) {
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
  Complex.prototype.polarCoords = function (r, phi) {
    if (typeof r !== "number" || typeof phi !== "number")
      throw new Error(
        this.getMsg("errNotNumeric", [
          "Specified r(radius) value and phi(angle) value",
        ])
      );
    return this.rectCoords(r * Math.cos(phi), r * Math.sin(phi));
  };

  // Set complex number with specified precision.
  Complex.prototype.precision = function (prec) {
    if (typeof prec !== "number")
      throw new Error(
        this.getMsg("errNotNumeric", ["Specified precision value"])
      );
    return this.rectCoords(
      Number(this.re.toPrecision(prec)),
      Number(this.im.toPrecision(prec))
    );
  };

  // Set complex number with specified digits.
  Complex.prototype.fixed = function (digs) {
    if (typeof digs !== "number") {
      throw new Error(this.getMsg("errNotNumeric", ["Specified digs value"]));
    }
    return this.rectCoords(
      Number(this.re.toFixed(digs)),
      Number(this.im.toFixed(digs))
    );
  };

  // Set the complex number according to the specified value.
  Complex.prototype.fromValue = function (value) {
    if (value instanceof Complex) return new Complex(value.re, value.im);
    if (typeof value === "string") {
      if (value === "i") value = "0+1i";
      const match = value.match(/(\d+)?([\+\-]\d*)[ij]/);
      if (match) {
        const re = match[1];
        const im =
          match[2] === "+" || match[2] === "-" ? match[2] + "1" : match[2];
        return new Complex(+re || 0, +im || 0);
      }
    }
    if (typeof value === "number") return new Complex(value, 0);
    throw new Error(this.getMsg("errTypeInvalid", ["Specified value"]));
  };

  // Get the absolute value of a complex number.
  Complex.prototype.getMagnitude = function () {
    return Math.sqrt(this.re * this.re + this.im * this.im);
  };

  // Get the argument of a complex number.
  Complex.prototype.getAngle = function () {
    return Math.atan2(this.im, this.re);
  };

  // Set the conjugate of a complex number.
  Complex.prototype.conjugate = function () {
    return this.rectCoords(this.re, -this.im);
  };

  // Set the negation of a complex number.
  Complex.prototype.negate = function () {
    return this.rectCoords(-this.re, -this.im);
  };

  // Modification of the current instance is prohibited and a new instance is always returned if one is needed.
  Complex.prototype.finalize = function () {
    this.rectCoords = function (a, b) {
      return new Complex(a, b);
    };
    if (Object.defineProperty) {
      Object.defineProperty(this, "re", { writable: false, value: this.re });
      Object.defineProperty(this, "im", { writable: false, value: this.im });
    }
    return this;
  };

  // Set the result of multiplying the specified value by a complex number.
  Complex.prototype.multiply = function (value) {
    const cpx = this.fromValue(value);
    return this.rectCoords(
      this.re * cpx.re - this.im * cpx.im,
      this.im * cpx.re + this.re * cpx.im
    );
  };

  // Set the result of dividing the specified value by a complex number.
  Complex.prototype.divide = function (value) {
    const cpx = this.fromValue(value);
    const div = Math.pow(cpx.re, 2) + Math.pow(cpx.im, 2);
    return this.rectCoords(
      (this.re * cpx.re + this.im * cpx.im) / div,
      (this.im * cpx.re - this.re * cpx.im) / div
    );
  };

  // Set the result of add the specified value by a complex number.
  Complex.prototype.add = function (value) {
    const cpx = this.fromValue(value);
    return this.rectCoords(this.re + cpx.re, this.im + cpx.im);
  };

  // Set the result of subtract the specified value by a complex number.
  Complex.prototype.subtract = function (value) {
    const cpx = this.fromValue(value);
    return this.rectCoords(this.re - cpx.re, this.im - cpx.im);
  };

  // Get the clone of a complex number.
  Complex.prototype.getClone = function () {
    return new Complex(this.re, this.im);
  };

  // Get the result of exponentialing the specified value by a complex number.
  Complex.prototype.exp = function () {
    return this.polarCoords(Math.exp(this.re), this.im);
  };

  // Set the logarithm of the specified rotation value to a complex number.
  Complex.prototype.log = function (rotation) {
    if (!rotation) rotation = 0;
    return this.rectCoords(
      Math.log(this.getMagnitude()),
      this.getAngle() + rotation * 2 * Math.PI
    );
  };

  // Set the result of powing the specified value by a complex number.
  Complex.prototype.pow = function (value) {
    const cpx = this.fromValue(value);
    const result = cpx.multiply(this.getClone().log()).exp();
    return this.rectCoords(result.re, result.im);
  };

  // Set the result of square rooting a complex number.
  Complex.prototype.sqrt = function () {
    const abs = this.getMagnitude(),
      sgn = this.im < 0 ? -1 : 1;
    return this.fromValue(
      Math.sqrt((abs + this.re) / 2),
      sgn * Math.sqrt((abs - this.re) / 2)
    );
  };

  // Get the hyperbolic sine of the specified value
  Complex.prototype.getSinh = function (value) {
    return (Math.pow(Math.E, value) - Math.pow(Math.E, -value)) / 2;
  };

  // Get the hyperbolic cosine of the specified value
  Complex.prototype.getCosh = function (value) {
    return (Math.pow(Math.E, value) + Math.pow(Math.E, -value)) / 2;
  };

  // Set the sine of a complex number.
  Complex.prototype.sin = function () {
    const re = this.re,
      im = this.im;
    return this.rectCoords(
      Math.sin(re) * this.getCosh(im),
      Math.cos(re) * this.getSinh(im)
    );
  };

  // Set the cosine of a complex number.
  Complex.prototype.cos = function () {
    const re = this.re,
      im = this.im;
    return this.rectCoords(
      Math.cos(re) * this.getCosh(im),
      Math.sin(re) * this.getSinh(im) * -1
    );
  };

  // Set the tangent of a complex number.
  Complex.prototype.tan = function () {
    const re = this.re,
      im = this.im,
      divident = Math.cos(2 * re) + this.getCosh(2 * im);
    return this.rectCoords(
      Math.sin(2 * re) / divident,
      this.getSinh(2 * im) / divident
    );
  };

  // Set the hyperbolic sine of a complex number.
  Complex.prototype.sinh = function () {
    const re = this.re,
      im = this.im;
    return this.rectCoords(
      this.getSinh(re) * Math.cos(im),
      this.getCosh(re) * Math.sin(im)
    );
  };

  // Set the hyperbolic cosine of a complex number.
  Complex.prototype.cosh = function () {
    const re = this.re,
      im = this.im;
    return this.rectCoords(
      this.getCosh(re) * Math.cos(im),
      this.getSinh(re) * Math.sin(im)
    );
  };

  // Set the hyperbolic tangent of a complex number.
  Complex.prototype.tanh = function () {
    const re = this.re,
      im = this.im,
      divident = this.getCosh(2 * re) + Math.cos(2 * im);
    return this.rectCoords(
      this.getSinh(2 * re) / divident,
      Math.sin(2 * im) / divident
    );
  };

  // Get a complex number as a string.
  Complex.prototype.getString = function () {
    var ret = "",
      a = this.re,
      b = this.im;
    if (a) ret += a;
    if ((a && b) || b < 0) ret += b < 0 ? "-" : "+";
    if (b) {
      var absIm = Math.abs(b);
      if (absIm != 1) ret += absIm;
      ret += "i";
    }
    return ret || "0";
  };

  // Get a complex number as a string in polar coordinate format.
  Complex.prototype.getStringPolarCoords = function () {
    return this.getMagnitude() + " " + this.getAngle();
  };

  // Get the result of determining whether the specified complex number and the current complex number match.
  Complex.prototype.getEquals = function (value) {
    const cpx = this.fromValue(value);
    return cpx.re === this.re && cpx.im === this.im;
  };

  return Complex;
})();
