[![npm](https://img.shields.io/npm/v/math-magic)](https://img.shields.io/npm/v/math-magic)
[![install size](https://packagephobia.com/badge?p=math-magic)](https://packagephobia.com/result?p=math-magic)
[![license](https://img.shields.io/github/license/AndyFang36/math-magic)](https://img.shields.io/github/license/AndyFang36/math-magic)
[![chat](https://img.shields.io/gitter/room/AndyFang36/math-magic)](https://img.shields.io/gitter/room/AndyFang36/math-magic)
[![downloads](https://img.shields.io/npm/dw/math-magic)](https://img.shields.io/npm/dw/math-magic)

<small>⚠tips: The new version fixed some fatal bugs. Thanks for using😋.</samll> 

# math-magic
Out-of-the-box math utilities.

--------------------------------------------------

### Getting Started  
①. `npm install math-magic`  
②. `import {mathMagic} from "math-magic"`

### Usage
1. random()  
* `mathMagic.random()` => [0, 1)
* `mathMagic.random(3)` => 0, 1, 2, 3
* `mathMagic.random(3, 4)` => 3, 4
* `mathMagic.random(0, 2, 2)` => [0.00, 2.00]

2. factorial()  
* `mathMagic.factorial(5)` => 120

3. fibonacci()  
* `mathMagic.fibonacci(6)` => [0, 1, 1, 2, 3, 5]

4. sum()  
* `mathMagic.sum([1, 2, 3, 4, 5,])` => 15

5. average()
* `mathMagic.average([1, 2, 3, 4, 5], 2)` => 3.50

### License 
* MPL-2.0 (Mozilla Public License, version 2.0)