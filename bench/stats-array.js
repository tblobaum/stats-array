
console.time('native array -- 50,000 arrays each with 50,000 items')
var nat = []
for (var i = 0; i < 50000; i++) {
  nat[i] = []
  for (var j = 0; j < 50000; j++) {
    nat[j] = j
  }
}
console.timeEnd('native array -- 50,000 arrays each with 50,000 items')

var Set = require('../')

console.time('stats array -- 50,000 arrays each with 50,000 items')
var arr = []
for (var i = 0; i < 50000; i++) {
  arr[i] = []
  for (var j = 0; j < 50000; j++) {
    arr[j] = j
  }
}
console.timeEnd('stats array -- 50,000 arrays each with 50,000 items')