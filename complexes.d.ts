declare module "@sigma-js/complexes" {
  class Complex {
    re: number;
    im: number;
    constructor(re?: number, im?: number);
    getMsg(key: string, repArr?: (string | number)[] | null): string;
    setRe(re: number): this;
    setIm(im: number): this;
    rectCoords(re: number, im: number): this;
    polarCoords(r: number, phi: number): this;
    precision(prec: number): this;
    fixed(digs: number): this;
    fromValue(value: Complex | string | number): this;
    getMagnitude(): number;
    getAngle(): number;
    conjugate(): this;
    negate(): this;
    finalize(): this;
    multiply(value: number | string | Complex): this;
    divide(value: number | string | Complex): this;
    add(value: number | string | Complex): this;
    subtract(value: number | string | Complex): this;
    getClone(): Complex;
    exp(): Complex;
    log(rotation: number): this;
    pow(value: Complex | string | number): this;
    sqrt(): this;
    getSinh(value: number): number;
    getCosh(value: number): number;
    sin(): this;
    cos(): this;
    tan(): this;
    sinh(): this;
    cosh(): this;
    tanh(): this;
    getString(): string;
    getStringPolarCoords(): string;
    getEquals(value: Complex | string | number): boolean;
  }
  export = Complex;
}
