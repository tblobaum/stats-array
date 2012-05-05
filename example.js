
var StatsArray = require('./')
var stats = new StatsArray([150, 200, '160', 100, 180, 60, 110, 240, '50', 90])

console.time('simple stats array test')

  var a = [1,2,3,4]
  console.log( 'native array', a )
  console.log( 'shouldnt exist', Array.prototype.sum )
  console.log( 'shouldnt exist', a.sum )
  console.log( 'should exist', stats.sum )

console.log('stats instanceof Array', stats instanceof Array) 
console.log('info: stats', stats)

console.log('info: stats sortDesc', stats.sortDesc())
console.log('info: stats sum', stats.sum())
console.log('info: stats min', stats.min())
console.log('info: stats max', stats.max())
console.log('info: stats mean', stats.mean())
console.log('info: stats range', stats.range())
console.log('info: stats variance', stats.variance())
console.log('info: stats standardDeviation', stats.standardDeviation())
console.log('info: stats round', stats.round())
console.log('info: stats sortAsc', stats.sortAsc())

console.timeEnd('simple stats array test')
console.log('info: stats pow 2', stats.pow(2))
console.log('info: stats sqrt', stats.sqrt())
console.log('info: stats matrix(3)', stats.matrix(3))

var fullMatrix = stats.matrix(3)
var matrix = new StatsArray(fullMatrix[0])

console.log('info: fullMatrix[0] sum', fullMatrix[0].sum())
console.log('info: fullMatrix[0] min', fullMatrix[0].min())

console.log('info: matrix', matrix)
console.log('info: matrix sum', matrix.sum())
console.log('info: matrix min', matrix.min())
console.log('info: matrix max', matrix.max())
console.log('info: matrix mean', matrix.mean())
console.log('info: matrix range', matrix.range())
console.log('info: matrix variance', matrix.variance())
console.log('info: matrix standardDeviation', matrix.standardDeviation())
console.log('info: matrix round', matrix.round())
console.log('info: sortAsc', stats.sortAsc())
console.log('info: stats matrix(4)', stats.matrix(4))
console.log('info: stats', stats)

console.log('info:', stats)
console.log('info: unshift', stats.unshift(50))
console.log('info: shift', stats.shift())
console.log('info: pop', stats.pop())
console.log('info: push', stats.push(12.5))
console.log('info: concat', stats.concat([14,21,22]))
console.log('info: slice', stats.slice())
console.log('info: splice', stats.splice())
console.log('info: indexOf', stats.indexOf(20))
console.log('info: reverse', stats.reverse())
console.log('info: stats', stats)

console.timeEnd('simple stats array test')