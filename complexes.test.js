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
});
