# ＠sigma-js/complexes [![NPM version](https://img.shields.io/npm/v/@sigma-js/complexes.svg?style=flat)](https://www.npmjs.com/package/@sigma-js/complexes) [![NPM license](https://img.shields.io/github/license/s-hama/sigma-js-complexes.svg)](https://github.com/s-hama/sigma-js-complexes/blob/master/LICENSE) [![NPM monthly downloads](https://img.shields.io/npm/dm/@sigma-js/complexes.svg?style=flat)](https://npmjs.org/package/@sigma-js/complexes) [![NPM total downloads](https://img.shields.io/npm/dt/@sigma-js/complexes.svg?style=flat)](https://npmjs.org/package/@sigma-js/complexes)

**@sigma-js/complexes** is a javascript library that provides trigonometric functions and calculation functions related to trigonometric functions.ｓ

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
// You can initialize prime numbers in the constructor
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

### Call example: getConjugate

```js
// You can get the conjugate value of a complex number.
const complex = new Complex(3, 4);
const conjugate = complex.getConjugate();
conjugate.re; // Output: 3
conjugate.im; // Output: -4
```

### Call example: getNegate

```js
// You can get the negation of a complex number.
const complex = new Complex(3, 4);
const negate = complex.getNegate();
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

## License

Copyright (c) 2023, [s-hama](https://github.com/s-hama).
Released under the [MIT License](LICENSE).

---
