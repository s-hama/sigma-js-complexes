# ＠sigma-js/complexes [![NPM version](https://img.shields.io/npm/v/@sigma-js/complexes.svg?style=flat)](https://www.npmjs.com/package/@sigma-js/complexes) [![NPM license](https://img.shields.io/github/license/s-hama/sigma-js-complexes.svg)](https://github.com/s-hama/sigma-js-complexes/blob/master/LICENSE) [![NPM monthly downloads](https://img.shields.io/npm/dm/@sigma-js/complexes.svg?style=flat)](https://npmjs.org/package/@sigma-js/complexes) [![NPM total downloads](https://img.shields.io/npm/dt/@sigma-js/complexes.svg?style=flat)](https://npmjs.org/package/@sigma-js/complexes)

**@sigma-js/complexes** is a JavaScript library that provides calculation functions related to complex numbers.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i @sigma-js/complexes
```

### JavaScript require

```js
const Complex = require("./complexes.js");
```

### TypeScript import

```js
import { Complex } from "@sigma-js/complexes";
```

### Call example: constructor

```js
// You can initialize complex numbers in the constructor
real = 1;
imaginary = 2;
complex = new Complex(real, imaginary);
console.log(complex.re); // Output: 1
console.log(complex.im); // Output: 2
```

### Call example: setRectCoords

```js
// You can complex numbers can be set from rectangular coordinates.
complex = new Complex();
complex.setRectCoords(3, 4);
console.log(complex.re); // Output: 3
console.log(complex.im); // Output: 4
```

### Call example: setPolarCoords

```js
// You can complex numbers can be set from polar coordinates.
complex = new Complex();
complex.setPolarCoords(1, Math.PI / 4);
console.log(complex.re); // Output: Math.sqrt(2) / 2
console.log(complex.im); // Output: Math.sqrt(2) / 2
```

### Call example: setPrecision

```js
// You can set complex numbers with specified precision.
complex = new Complex();
complex.setPrecision(1, Math.PI / 4);
console.log(complex.re); // Output: Math.sqrt(2) / 2
console.log(complex.im); // Output: Math.sqrt(2) / 2
```

### Call example: setFixed

```js
// You can set complex numbers with specified digits.
complex = new Complex(3.141592653589793, 2.718281828459045);
complex.setFixed(4);
console.log(complex.re); // Output: 3.1416
console.log(complex.im); // Output: 2.7183
```

### Call example: setFromValue

```js
// You can get the complex number according to the specified value.
const inputComplex = new Complex(2, 4);
const beforeComplex = new Complex();
let retComplex = beforeComplex.setFromValue(inputComplex);
retComplex.re; // Output: 2
retComplex.im; // Output: 4

retComplex = beforeComplex.setFromValue("3+2i");
retComplex.re; // Output: 3
retComplex.im; // Output: 2
```

### Call example: getMagnitude

```js
// You can get the absolute value of a complex number.
const complex = new Complex(3, 4);
complex.getMagnitude(); // Output: 5
```

### Call example: getAngle

```js
// You can get the argument of a complex number.
  const complex = new Complex(3, 4);
complex.getAngle(); // Output: 0.92729...
```

### Call example: setConjugate

```js
// You can get the conjugate value of a complex number.
const complex = new Complex(3, 4);
const conjugate = complex.setConjugate();
conjugate.re; // Output: 3
conjugate.im; // Output: -4
```

### Call example: setNegate

```js
// You can get the negation of a complex number.
const complex = new Complex(3, 4);
const negate = complex.setNegate();
conjugate.re; // Output: -3
conjugate.im; // Output: -4
```

### Call example: finalize

```js
// You can modification of the current instance is prohibited and a new instance is always returned if one is needed.
const complex = new Complex(2, 3);
const finalizedComplex = complex.finalize();
const newComplex = finalizedComplex.setRectCoords(4, 5);
console.log(newComplex); // Output: Complex { re: 4, im: 5 }

const reDescriptor = Object.getOwnPropertyDescriptor(finalizedComplex, "re");
const imDescriptor = Object.getOwnPropertyDescriptor(finalizedComplex, "im");
console.log(reDescriptor.writable); // Output: false
console.log(imDescriptor.writable); // Output: false
```

### Call example: setMultiply

```js
// You can set the result of multiplying the specified value by a complex number.
// When specified numerically
const beforeComplex = new Complex(2, 3);
const afterComplex = beforeComplex.setMultiply(3);
// (2 + 3i) * 3 = 6 + 9i
console.log(afterComplex.re); // Output: 6
console.log(afterComplex.im); // Output: 9

// When specified as a string
const beforeComplex = new Complex(2, 3);
const afterComplex = beforeComplex.setMultiply("2+4i");
// (2 + 3i) * (2 + 4i) = -8 + 14i
console.log(afterComplex.re); // Output: -8
console.log(afterComplex.im); // Output: 14
```

### Call example: setDivide

```js
// You can set the result of dividing the specified value by a complex number.
// When specified numerically
const beforeComplex = new Complex(6, 9);
const afterComplex = beforeComplex.setDivide(3);
// (6 + 9i) / 3 = 2 + 3i
console.log(afterComplex.re); // Output: 2
console.log(afterComplex.im); // Output: 3

// When specified as a string
const beforeComplex = new Complex(6, 9);
const afterComplex = beforeComplex.setDivide("2-4i");
// (6 + 9i) / (2 - 4i) = -1.2 + 2.1i
console.log(afterComplex.re); // Output: -2.1
console.log(afterComplex.im); // Output: 2.1
```

### Call example: getClone

```js
// You can get the clone of a complex number.
const complex = new Complex(2, 3);
const clone = complex.getClone();
console.log(clone.re); // Output: 2
console.log(clone.im); // Output: 3
```

### Call example: getExp

```js
// You can get the result of exponentialing the specified value by a complex number.
const complex = new Complex(2, 3);
const expResult = complex.getExp();
console.log(expResult.re); // Output: e^2 * cos(3)
console.log(expResult.im); // Output: e^2 * sin(3)
```

### Call example: setLog

```js
// You can set the logarithm of the specified rotation value to a complex number.
const complex = new Complex(2, 3);
const rotatedLog = complex.setLog(1);
console.log(rotatedLog.re); // Output: log(√13)
console.log(rotatedLog.im); // Output: 1.57079...
```

### Call example: setPow

```js
// You can set the result of powing the specified value by a complex number.
const base = new Complex(2, 3);
const exponent = new Complex(1, 1);
const powResult = base.setPow(exponent);
console.log(powResult.re); // Output: e^(2 - 3)
console.log(powResult.im); // Output: e^(2 - 3)
```

### Call example: setSqrt

```js
// You can set the result of square rooting a complex number.
const complex = new Complex(2, 3);
const sqrtResult = complex.setSqrt();
console.log(sqrtResult.re); // Output: √(√13 + 2) / 2
console.log(sqrtResult.im); // Output: √(√13 - 2) / 2
```

```js
// You can get the hyperbolic sine of the specified value.
const complex = new Complex(2, 3);
const sinhResult = complex.getSinh(2);
console.log(sinhResult); // Output: 3.62686...
```

### Call example: getCosh

```js
// You can get the hyperbolic cosine of the specified value.
const complex = new Complex(2, 3);
const coshResult = complex.getCosh(2);
console.log(coshResult); // Output: 3.76219...
```

## License

Copyright (c) 2023, [s-hama](https://github.com/s-hama).
Released under the [MIT License](LICENSE).

---
