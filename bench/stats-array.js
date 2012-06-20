
console.time('native array -- 50,000 arrays each with 50,000 items')
for (var i = 0; i < 50000; i++) {
  var nat = []
  for (var j = 0; j < 50000; j++) {
    nat[j] = j
  }
}
console.timeEnd('native array -- 50,000 arrays each with 50,000 items')

var Set = require('../')

console.time('stats array -- 50,000 arrays each with 50,000 items')
for (var i = 0; i < 50000; i++) {
  var arr = []
  for (var j = 0; j < 50000; j++) {
    arr[j] = j
  }
}
console.timeEnd('stats array -- 50,000 arrays each with 50,000 items')