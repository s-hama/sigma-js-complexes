const Complex = require("./complexes.js");
describe("Complex functions", () => {
  let complex;
  describe("Complex constructor", () => {
    it("should initialized in the constructor", () => {
      complex = new Complex();
      expect(complex.re).toBe(0);
      expect(complex.im).toBe(0);

      complex = new Complex(5, 5);
      expect(complex.re).toBe(5);
      expect(complex.im).toBe(5);
    });
  });
  describe("setRe", () => {
    beforeEach(() => {
      complex = new Complex();
    });
    it("should set the real part", () => {
      complex.setRe(5);
      expect(complex.re).toBe(5);
    });
    it("should throw an error when setting non-numeric real part", () => {
      // msg: Specified real value must be a number.
      expect(() => complex.setRe("string")).toThrowError(
        complex.getMsg("errNotNumeric", ["Specified real value"])
      );
    });
  });
  describe("setIm", () => {
    beforeEach(() => {
      complex = new Complex();
    });
    it("should set the imaginary part", () => {
      complex.setIm(3);
      expect(complex.im).toBe(3);
    });
    it("should throw an error when setting non-numeric imaginary part", () => {
      // msg: Specified imaginary value must be a number.
      expect(() => complex.setIm("string")).toThrowError(
        complex.getMsg("errNotNumeric", ["Specified imaginary value"])
      );
    });
  });
  describe("setRectCoords", () => {
    beforeEach(() => {
      complex = new Complex();
    });
    it("should set real and imaginary parts correctly", () => {
      complex.setRectCoords(3, 4);
      expect(complex.re).toBe(3);
      expect(complex.im).toBe(4);
    });
    it("should throw an error for non-numeric arguments", () => {
      // msg: Specified real value and imaginary value must be a number.
      expect(() => complex.setRectCoords("string", 3)).toThrowError(
        complex.getMsg("errNotNumeric", [
          "Specified real value and imaginary value",
        ])
      );
      // msg: Specified real value and imaginary value must be a number.
      expect(() => complex.setRectCoords(1, null)).toThrowError(
        complex.getMsg("errNotNumeric", [
          "Specified real value and imaginary value",
        ])
      );
    });
  });
  describe("setPolarCoords", () => {
    beforeEach(() => {
      complex = new Complex();
    });
    it("should set complex number from polar coordinates", () => {
      // check if 45 degree polar coordinates are converted to rectangular coordinates
      complex.setPolarCoords(1, Math.PI / 4);
      expect(complex.re).toBeCloseTo(Math.sqrt(2) / 2);
      expect(complex.im).toBeCloseTo(Math.sqrt(2) / 2);
    });
    it("should throw an error for non-numeric input", () => {
      // msg: Specified r(radius) value and phi(angle) value must be a number.
      expect(() => complex.setPolarCoords("invalid", 2)).toThrowError(
        complex.getMsg("errNotNumeric", [
          "Specified r(radius) value and phi(angle) value",
        ])
      );
      // msg: Specified r(radius) value and phi(angle) value must be a number.
      expect(() => complex.setPolarCoords(1, "invalid")).toThrowError(
        complex.getMsg("errNotNumeric", [
          "Specified r(radius) value and phi(angle) value",
        ])
      );
    });
  });
  describe("setPrecision", () => {
    it("should set precision for the complex number", () => {
      const complex = new Complex(1.234567, 2.345678);
      complex.setPrecision(2);
      // check if the real and imaginary parts are set with 2-digit precision
      expect(complex.re).toBeCloseTo(1.2);
      expect(complex.im).toBeCloseTo(2.3);
    });
    it("should throw an error for non-numeric input", () => {
      const complex = new Complex();
      // msg: Specified precision value must be a number.
      expect(() => complex.setPrecision("invalid")).toThrowError(
        complex.getMsg("errNotNumeric", ["Specified precision value"])
      );
    });
  });
  describe("setFixed", () => {
    it("should set complex number with specified digits", () => {
      const complex = new Complex(3.141592653589793, 2.718281828459045);
      complex.setFixed(4);
      // check whether the real and imaginary parts are set to four decimal places
      expect(complex.re).toBeCloseTo(3.1416);
      expect(complex.im).toBeCloseTo(2.7183);
    });
    it("should throw an error when specifying non-numeric digits", () => {
      const complex = new Complex();
      // msg: Specified digs value must be a number.
      expect(() => complex.setFixed("invalid")).toThrowError(
        complex.getMsg("errNotNumeric", ["Specified digs value"])
      );
    });
  });
  describe("getMagnitude", () => {
    it("should get the absolute value of a complex number", () => {
      const complex = new Complex(3, 4);
      expect(complex.getMagnitude()).toBe(5);
    });
  });
  describe("getAngle", () => {
    it("should get the argument of a complex number", () => {
      const complex = new Complex(3, 4);
      expect(complex.getAngle()).toBeCloseTo(0.93, 2);
    });
  });
  describe("setConjugate", () => {
    it("should get the conjugate value of a complex number", () => {
      const complex = new Complex(3, 4);
      const conjugate = complex.setConjugate();
      expect(conjugate.re).toBe(3);
      expect(conjugate.im).toBe(-4);
    });
  });
  describe("setNegate", () => {
    it("should get the negation of a complex number", () => {
      const complex = new Complex(3, 4);
      const negate = complex.setNegate();
      expect(negate.re).toBe(-3);
      expect(negate.im).toBe(-4);
    });
  });
  describe("finalize", () => {
    it("should setRectCoords returns new Complex instance", () => {
      const complex = new Complex(2, 3);
      const finalizedComplex = complex.finalize();
      // Check if calling setRectCoords after calling finalize method returns a new instance
      const newComplex = finalizedComplex.setRectCoords(4, 5);
      expect(newComplex).toBeInstanceOf(Complex);
      expect(newComplex).not.toBe(finalizedComplex);
      // re, im Ensure that the property is write-protected
      const reDescriptor = Object.getOwnPropertyDescriptor(finalizedComplex, "re");
      const imDescriptor = Object.getOwnPropertyDescriptor(finalizedComplex, "im");
      expect(reDescriptor.writable).toBe(false);
      expect(imDescriptor.writable).toBe(false);
    });
  });
  describe("setFromValue", () => {
    it("should set the complex number from a Complex instance", () => {
      const inputComplex = new Complex(2, 4);
      const beforeComplex = new Complex();
      const afterComplex = beforeComplex.setFromValue(inputComplex);
      expect(afterComplex.re).toBe(2);
      expect(afterComplex.im).toBe(4);
    });
    it("should set the complex number from a string", () => {
      const beforeComplex = new Complex();
      const afterComplex = beforeComplex.setFromValue("3+2i");
      expect(afterComplex.re).toBe(3);
      expect(afterComplex.im).toBe(2);
    });
    test("should set the complex number from a number", () => {
      const beforeComplex = new Complex();
      const afterComplex = beforeComplex.setFromValue(5);
      expect(afterComplex.re).toBe(5);
      expect(afterComplex.im).toBe(0);
    });
    it("should throw an error if the specified value is of an invalid type", () => {
      const complex = new Complex();
      // msg: The type of the Specified value is invalid.
      expect(() => complex.setFromValue(true)).toThrowError(
        complex.getMsg("errTypeInvalid", ["Specified value"])
      );
    });
  });
  describe("setMultiply", () => {
    it("should set the result of multiplying the specified value by a complex (test with a numeric value)", () => {
      // (2 + 3i) * 3 = 6 + 9i
      const beforeComplex = new Complex(2, 3);
      const afterComplex = beforeComplex.setMultiply(3);
      expect(afterComplex.re).toBe(6);
      expect(afterComplex.im).toBe(9);
    });
    it("should set the result of multiplying the specified value by a complex (test with a string value)", () => {
      // (2 + 3i) * (2 + 4i) = -8 + 14i
      const beforeComplex = new Complex(2, 3);
      const afterComplex = beforeComplex.setMultiply("2+4i");
      expect(afterComplex.re).toBe(-8);
      expect(afterComplex.im).toBe(14);
    });
  });
  describe("setDivide", () => {
    it("should set the result of dividing the specified value by a complex number (test with a numeric value)", () => {
      // (6 + 9i) / 3 = 2 + 3i
      const beforeComplex = new Complex(6, 9);
      const afterComplex = beforeComplex.setDivide(3);
      expect(afterComplex.re).toBe(2);
      expect(afterComplex.im).toBe(3);
    });
    it("should set the result of dividing the specified value by a complex (test with a string value)", () => {
      // (6 + 9i) / (2 - 4i) = -1.2 + 2.1i
      const beforeComplex = new Complex(6, 9);
      const afterComplex = beforeComplex.setDivide("2-4i");
      expect(afterComplex.re).toBeCloseTo(-1.2);
      expect(afterComplex.im).toBeCloseTo(2.1);
    });
  });
  describe("setAdd", () => {
    it("should set the result of adding the specified value by a complex (test with a numeric value)", () => {
      // 2 + 3i + 3 = 5 + 3i
      const beforeComplex = new Complex(2, 3);
      const afterComplex = beforeComplex.setAdd(3);
      expect(afterComplex.re).toBe(5);
      expect(afterComplex.im).toBe(3);
    });
    it("should set the result of adding the specified value by a complex (test with a string value)", () => {
      // 2 + 3i + 2 + 4i = 4 + 7i
      const beforeComplex = new Complex(2, 3);
      const afterComplex = beforeComplex.setAdd("2+4i");
      expect(afterComplex.re).toBe(4);
      expect(afterComplex.im).toBe(7);
    });
  });
  describe("setSubtract", () => {
    it("should set the result of subtracting the specified value by a complex (test with a numeric value)", () => {
      // 2 + 3i - 3 = -1 + 3i
      const beforeComplex = new Complex(2, 3);
      const afterComplex = beforeComplex.setSubtract(3);
      expect(afterComplex.re).toBe(-1);
      expect(afterComplex.im).toBe(3);
    });
    it("should set the result of subtracting the specified value by a complex (test with a string value)", () => {
      // 2 + 3i - (2 + 4i) = 0 - 1i
      const beforeComplex = new Complex(2, 3);
      const afterComplex = beforeComplex.setSubtract("2+4i");
      expect(afterComplex.re).toBe(0);
      expect(afterComplex.im).toBe(-1);
    });
  });
  describe("getClone", () => {
    it("should get the clone of a complex number", () => {
      const beforeComplex = new Complex(3, 4);
      const afterComplex = beforeComplex.getClone();
      expect(afterComplex).toEqual(beforeComplex);
      expect(afterComplex).not.toBe(beforeComplex);
    });
  });
  describe("getExp", () => {
    it("should get the result of exponentialing the specified value by a complex number", () => {
      const complex = new Complex();
      const expResult = complex.getExp();
      const expected = complex.setPolarCoords(Math.exp(3), 4);
      expect(expResult.re).toBeCloseTo(expected.re);
      expect(expResult.im).toBeCloseTo(expected.im);
    });
  });
  describe("setLog", () => {
    it("should set the logarithm of the specified rotation value to a complex number", () => {
      const rotation = 1;
      const logResult = complex.setLog(rotation);
      const expected = complex.setRectCoords(Math.log(complex.getMagnitude()), complex.getAngle() + rotation * 2 * Math.PI);
      expect(logResult.re).toBeCloseTo(expected.re);
      expect(logResult.im).toBeCloseTo(expected.im);
    });
  });
  describe("setPow", () => {
    it("should set the result of powing the specified value by a complex number", () => {
      const powResult = complex.setPow(new Complex(2, 1));
      const cpx = complex.getClone();
      const expected = cpx.setMultiply(cpx.getClone().setLog()).getExp();
      expect(powResult).toEqual(expected);
    });
  });
  describe("setSqrt", () => {
    it("should set the result of square rooting a complex number", () => {
      const sqrtResult = complex.setSqrt();
      const abs = complex.getMagnitude();
      const sgn = complex.im < 0 ? -1 : 1;
      const expected = complex.setFromValue(
        Math.sqrt((abs + complex.re) / 2),
        sgn * Math.sqrt((abs - complex.re) / 2)
      );
      expect(sqrtResult).toEqual(expected);
    });
  });
  describe("getSinh", () => {
    it('should get the hyperbolic sine of the specified value', () => {
      const complex = new Complex(2, 3);
      const sinhResult = complex.getSinh(2);
      expect(sinhResult).toBeCloseTo(3.6268604078470186);
    });
  });
  describe("getCosh", () => {
    it('should get the hyperbolic cosine of the specified value', () => {
      const complex = new Complex(2, 3);
      const coshResult = complex.getCosh(2);
      expect(coshResult).toBeCloseTo(3.7621956910836314);
    });
  });
  describe("setSin", () => {
    it("should set the sine of a complex number", () => {
      const re = 1, im = 2;
      const complex = new Complex(re, im);
      const sinResult = complex.setSin();
      expect(sinResult.re).toBeCloseTo(Math.sin(re) * complex.getCosh(im));
      expect(sinResult.im).toBeCloseTo(Math.cos(re) * complex.getSinh(im));
    });
  });
  describe("setCos", () => {
    it("should set the cosine of a complex number", () => {
      const re = 2, im = 3;
      const complex = new Complex(re, im);
      const cosResult = complex.setCos();
      expect(cosResult.re).toBeCloseTo(Math.cos(re) * complex.getCosh(im));
      expect(cosResult.im).toBeCloseTo(Math.sin(re) * complex.getSinh(im) * -1);
    });
  });
  describe("setTan", () => {
    it("should set the tangent of a complex number test", () => {
      const re = 3, im = 4;
      const complex = new Complex(re, im);
      const tanResult = complex.setTan();
      const divident = Math.cos(2 * re) + complex.getCosh(2 * im);
      expect(tanResult.re).toBeCloseTo(Math.sin(2 * re) / divident);
      expect(tanResult.im).toBeCloseTo(complex.getSinh(2 * im) / divident);
    });
  });
  describe("setSinh", () => {
    it("should set the hyperbolic sine of a complex number", () => {
      const re = 1, im = 2;
      const complex = new Complex(re, im);
      const sinResult = complex.setSinh();
      expect(sinResult.re).toBeCloseTo(complex.getSinh(re) * Math.cos(im));
      expect(sinResult.im).toBeCloseTo(complex.getCosh(re) * Math.sin(im));
    });
  });
  describe("setCosh", () => {
    it("should set the hyperbolic cosine of a complex number", () => {
      const re = 2, im = 3;
      const complex = new Complex(re, im);
      const cosResult = complex.setCosh();
      expect(cosResult.re).toBeCloseTo(complex.getCosh(re) * Math.cos(im));
      expect(cosResult.im).toBeCloseTo(complex.getSinh(re) * Math.sin(im));
    });
  });
  describe("setTanh", () => {
    it("should set the hyperbolic tangent of a complex number test", () => {
      const re = 3, im = 4;
      const complex = new Complex(re, im);
      const tanResult = complex.setTanh();
      const divident = complex.getCosh(2 * re) + Math.cos(2 * im);
      expect(tanResult.re).toBeCloseTo(complex.getSinh(2 * re) / divident);
      expect(tanResult.im).toBeCloseTo(Math.sin(2 * im) / divident);
    });
  });
});
