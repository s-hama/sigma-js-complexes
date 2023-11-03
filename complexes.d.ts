declare module "@sigma-js/complexes" {
  class Complex {
    re: number;
    im: number;
    constructor(re?: number, im?: number);
    getMsg(key: string, repArr?: (string | number)[] | null): string;
    setRe(value: number): this;
    setIm(value: number): this;
  }
  export = Complex;
}
