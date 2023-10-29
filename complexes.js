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
    this.re = r * Math.cos(phi);
    this.im = r * Math.sin(phi);
    return this;
  };

  // Set complex number with specified precision.
  Complex.prototype.setPrecision = function (prec) {
    if (typeof prec !== "number")
      throw new Error(this.getMsg("errNotNumeric", ["Specified precision value"]));
    this.re = this.re.toPrecision(prec);
    this.im = this.im.toPrecision(prec);
    return this;
  };

  // // Add the 'toFixed' method
  // Complex.prototype.toFixed = function (k) {
  //   if (typeof k !== "number") {
  //     throw new Error(this.getMsg("errNotNumeric", ["k"]));
  //   }
  //   this.re = this.re.toFixed(k);
  //   this.im = this.im.toFixed(k);
  //   return this;
  // };

  // // Add the 'magnitude' method
  // Complex.prototype.magnitude = function () {
  //   return Math.sqrt(this.re * this.re + this.im * this.im);
  // };

  // // Add the 'angle' method
  // Complex.prototype.angle = function () {
  //   return Math.atan2(this.im, this.re);
  // };

  // // Add the 'conjugate' method
  // Complex.prototype.conjugate = function () {
  //   return new Complex(this.re, -this.im);
  // };

  // // Add the 'negate' method
  // Complex.prototype.negate = function () {
  //   return new Complex(-this.re, -this.im);
  // };

  // // Add the 'multiply' method
  // Complex.prototype.multiply = function (z) {
  //   if (!(z instanceof Complex))
  //     throw new Error("The argument must be an instance of Complex.");
  //   const a = this.re;
  //   const b = this.im;
  //   this.re = z.re * a - z.im * b;
  //   this.im = b * z.re + z.im * a;
  //   return this;
  // };

  // // Add the 'divide' method
  // Complex.prototype.divide = function (z) {
  //   if (!(z instanceof Complex))
  //     throw new Error("The argument must be an instance of Complex.");
  //   const divident = z.re * z.re + z.im * z.im;
  //   const a = this.re;
  //   const b = this.im;
  //   this.re = (a * z.re + b * z.im) / divident;
  //   this.im = (b * z.re - a * z.im) / divident;
  //   return this;
  // };

  // // Add the 'add' method
  // Complex.prototype.add = function (z) {
  //   if (!(z instanceof Complex))
  //     throw new Error("The argument must be an instance of Complex.");
  //   this.re += z.re;
  //   this.im += z.im;
  //   return this;
  // };

  // // Add the 'subtract' method
  // Complex.prototype.subtract = function (z) {
  //   if (!(z instanceof Complex))
  //     throw new Error("The argument must be an instance of Complex.");
  //   this.re -= z.re;
  //   this.im -= z.im;
  //   return this;
  // };

  // // Add the 'pow' method
  // Complex.prototype.pow = function (z) {
  //   if (!(z instanceof Complex))
  //     throw new Error("The argument must be an instance of Complex.");
  //   const result = z.multiply(this.clone().log()).exp();
  //   this.re = result.re;
  //   this.im = result.im;
  //   return this;
  // };

  // // Add the 'sqrt' method
  // Complex.prototype.sqrt = function () {
  //   const abs = this.magnitude();
  //   const sgn = this.im < 0 ? -1 : 1;
  //   this.re = Math.sqrt((abs + this.re) / 2);
  //   this.im = sgn * Math.sqrt((abs - this.re) / 2);
  //   return this;
  // };

  // // Add the 'log' method
  // Complex.prototype.log = function (k = 0) {
  //   this.re = Math.log(this.magnitude());
  //   this.im = this.angle() + k * 2 * Math.PI;
  //   return this;
  // };

  // // Add the 'exp' method
  // Complex.prototype.exp = function () {
  //   const newRe = Math.exp(this.re);
  //   this.re = newRe * Math.cos(this.im);
  //   this.im = newRe * Math.sin(this.im);
  //   return this;
  // };

  // // Add the 'sin' method
  // Complex.prototype.sin = function () {
  //   const a = this.re;
  //   const b = this.im;
  //   const newRe = Math.sin(a) * cosh(b);
  //   this.re = newRe;
  //   this.im = Math.cos(a) * sinh(b);
  //   return this;
  // };

  // // Add the 'cos' method
  // Complex.prototype.cos = function () {
  //   const a = this.re;
  //   const b = this.im;
  //   const newRe = Math.cos(a) * cosh(b);
  //   this.re = newRe;
  //   this.im = Math.sin(a) * sinh(b) * -1;
  //   return this;
  // };

  // // Add the 'tan' method
  // Complex.prototype.tan = function () {
  //   const a = this.re;
  //   const b = this.im;
  //   const divident = Math.cos(2 * a) + cosh(2 * b);
  //   this.re = Math.sin(2 * a) / divident;
  //   this.im = sinh(2 * b) / divident;
  //   return this;
  // };

  // // Add the 'sinh' method
  // Complex.prototype.sinh = function () {
  //   const a = this.re;
  //   const b = this.im;
  //   const newRe = sinh(a) * Math.cos(b);
  //   this.re = newRe;
  //   this.im = cosh(a) * Math.sin(b);
  //   return this;
  // };

  // // Add the 'cosh' method
  // Complex.prototype.cosh = function () {
  //   const a = this.re;
  //   const b = this.im;
  //   const newRe = cosh(a) * Math.cos(b);
  //   this.re = newRe;
  //   this.im = sinh(a) * Math.sin(b);
  //   return this;
  // };

  // // Add the 'tanh' method
  // Complex.prototype.tanh = function () {
  //   const a = this.re;
  //   const b = this.im;
  //   const divident = cosh(2 * a) + Math.cos(2 * b);
  //   this.re = sinh(2 * a) / divident;
  //   this.im = Math.sin(2 * b) / divident;
  //   return this;
  // };

  // // Add the 'clone' method
  // Complex.prototype.clone = function () {
  //   return new Complex(this.re, this.im);
  // };

  // // Add the 'toString' method
  // Complex.prototype.toString = function (polar) {
  //   if (polar) {
  //     return this.magnitude() + " " + this.angle();
  //   }

  //   let ret = "";
  //   const a = this.re;
  //   const b = this.im;
  //   if (a) {
  //     ret += a;
  //   }
  //   if ((a && b) || b < 0) {
  //     ret += b < 0 ? "-" : "+";
  //   }
  //   if (b) {
  //     const absIm = Math.abs(b);
  //     if (absIm !== 1) {
  //       ret += absIm;
  //     }
  //     ret += "i";
  //   }
  //   return ret || "0";
  // };

  // // Add the 'equals' method
  // Complex.prototype.equals = function (z) {
  //   if (!(z instanceof Complex))
  //     throw new Error("The argument must be an instance of Complex.");
  //   return z.re === this.re && z.im === this.im;
  // };

  return Complex;
})();
