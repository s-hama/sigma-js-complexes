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
      // Specified real value and imaginary value must be a number.
      expect(() => complex.setRectCoords("string", 3)).toThrowError(
        complex.getMsg("errNotNumeric", [
          "Specified real value and imaginary value",
        ])
      );
      // Specified real value and imaginary value must be a number.
      expect(() => complex.setRectCoords(1, null)).toThrowError(
        complex.getMsg("errNotNumeric", [
          "Specified real value and imaginary value",
        ])
      );
    });
  });
});
