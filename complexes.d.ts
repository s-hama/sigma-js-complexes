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
  }
  export = Complex;
}
