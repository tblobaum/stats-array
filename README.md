# stats-array

an array prototype extension for performing statistical calculations

[![Build Status](https://secure.travis-ci.org/tblobaum/stats-array.png)](http://travis-ci.org/tblobaum/stats-array)

## Install

`npm install stats-array`

## Example

```js

var Set = require('stats-array')

var set1 = new Set([ 50, 40, 30, 20, 30, 40, 50 ])

console.log(set1.stdDeviation()) 
// 11.126972805283735

console.log(set1.stdDeviation(0.95)) 
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

### new Set(Array)

### .confidenceInterval(value, length, confidence)
calculate the confidence of `value` which was created from a set of `length` using a gaussian (normal) distribution

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

### .range()
returns the range between the min and max values

### .toMatrix(quadrants)
divides the set into quadrants

### .sortAsc()
sort the set with smallest values first

### .sortDesc()
sort the set with largest values first

### .round()
calls Math.round on every value in the set

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


## License

MIT
