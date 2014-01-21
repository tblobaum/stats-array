# stats-array

an array prototype extension for performing statistical calculations

[![Build Status](https://secure.travis-ci.org/tblobaum/stats-array.png)](http://travis-ci.org/tblobaum/stats-array)

## Install

`npm install stats-array`

## Example

```js

var StatsArray = require('stats-array')

var arr = [ 50, 40, 30, 20, 30, 40, 50 ]

console.log(arr.stdDeviation()) 
// 11.126972805283735

console.log(arr.stdDeviation(0.95)) 
// also calculates 95% confidence interval
// {
//   confidence: 0.95, 
//   lower:  7.17014792596768, 
//   upper:  24.502329752802414, 
//   value:  11.126972805283735, 
//   length: 7, 
//   alpha:  0.05
// }

```

## API

### []

### .stdDeviation([confidence], [bool])
calculate the standard deviation of the set and return the value, or optionally pass in a confidence interval (0.01-0.99) which will change the return value to an object hash

### .variance([bool])
calculate the variance of the set

### .max()
maximum value in the set

### .min()
minimum value in the set

### .sum()
sum of all values in the set

### .mean()
returns the average

### .marginOfError(confidence)
returns the margin of error for a determined confidence value (0.01-0.99).

### .range()
returns the range between the min and max values

### .toMatrix(number)
divides the set into a matrix of subarrays

### .sortAsc()
sort the set with smallest values first

### .sortDesc()
sort the set with largest values first

### .round()
calls Math.round on every value in the set

### .roundTo(num)
round every value to `num` places

```js

[ 1.2555, 1.2557, 1.256001 ].roundTo(1000)
// => [ 1.256, 1.256, 1.256 ]

[ 955642, 443234, 350460.256001 ].roundTo(0.001)
// => [ 956000, 443000, 350000 ]

[ 1.2555, 1.2557, 1.256001 ].tan().roundTo(100)
// => [ 3.07, 3.07, 3.07 ]

```

### .abs()
calls Math.abs on every value in the set

### .acos()
calls Math.acos on every value in the set

### .asin()
calls Math.asin on every value in the set

### .atan()
calls Math.atan on every value in the set

### .ceil()
calls Math.ceil on every value in the set

### .exp()
calls Math.exp on every value in the set

### .floor()
calls Math.floor on every value in the set

### .log()
calls Math.log on every value in the set

### .pow(number)
calls Math.pow on every value in the set

### .sin()
calls Math.sin on every value in the set

### .sqrt()
calls Math.sqrt on every value in the set

### .tan()
calls Math.tan on every value in the set

### .sin()
calls Math.sin on every value in the set

### .confidenceInterval(value, length, confidence)
calculate the confidence of `value` which was created from a set of `length` using a gaussian (normal) distribution

## Tests

`npm install -g tap && npm test`

## Benchmarks

Extending the Array.prototype causes no significant loss in performance compared with native arrays.

`node bench/stats-array.js`

## License

(The MIT License)

Copyright (c) 2012 Thomas Blobaum <tblobaum@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.