declare module "@sigma-js/complexes" {
  class Complex {
    re: number;
    im: number;
    constructor(re?: number, im?: number);
    getMsg(key: string, repArr?: (string | number)[] | null): string;
    setRe(re: number): this;
    setIm(im: number): this;
    setRectCoords(re: number, im: number): this;
    setPolarCoords(r: number, phi: number): this;
    setPrecision(prec: number): this;
    setFixed(digs: number): this;
    setFromValue(value: Complex | string | number): this;
    getMagnitude(): number;
    getAngle(): number;
    getConjugate(): this;
    getNegate(): this;
    finalize(): this;
    setMultiply(value: number | string | Complex): this;
    setDivide(value: number | string | Complex): this;
    setAdd(value: number | string | Complex): this;
    setSubtract(value: number | string | Complex): this;
  }
  export = Complex;
}
