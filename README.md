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

## License

Copyright (c) 2023, [s-hama](https://github.com/s-hama).
Released under the [MIT License](LICENSE).

---
