var test = require('tap').test
var Set = require('../')
var set1 = new Set([1, 5, 10])
var set2 = new Set([ 50, 40, 30, 20, 30, 40, 50 ])
var array = [1, 2, 3, 4]

test('should not extend Array.prototype', function (t) {
  t.notok(array.sum, 'sum method should not exist for native arrays')
  t.end()
})

test('set1 should have methods', function (t) {
  t.ok(set1.abs, 'abs')
  t.ok(set1.acos, 'acos')
  t.ok(set1.asin, 'asin')
  t.ok(set1.atan, 'atan')
  t.ok(set1.ceil, 'ceil')
  t.ok(set1.exp, 'exp')
  t.ok(set1.floor, 'floor')
  t.ok(set1.log, 'log')
  t.ok(set1.pow, 'pow')
  t.ok(set1.sin, 'sin')
  t.ok(set1.sqrt, 'sqrt')
  t.ok(set1.tan, 'tan')
  t.ok(set1.max, 'max')
  t.ok(set1.min, 'min')
  t.ok(set1.round, 'round')
  t.ok(set1.sum, 'sum')
  t.ok(set1.mean, 'mean')
  t.ok(set1.range, 'range')
  t.ok(set1.variance, 'variance')
  t.ok(set1.stdDeviation, 'stdDeviation')
  t.ok(set1.confidenceInterval, 'confidenceInterval')
  t.ok(set1.sortAsc, 'sortAsc')
  t.ok(set1.sortDesc, 'sortDesc')
  t.ok(set1.toMatrix, 'toMatrix')
  t.end()
})

test('methods should return a stats array', function (t) {
  t.deepEquals(new Set([1,-5,10]).abs(), [1,5,10], 'Math.abs each')
  t.deepEquals(new Set([0.1,0.2,0.3]).acos(), [1.4706289056333368,1.369438406004566,1.2661036727794992], 'Math.acos each')
  t.deepEquals(new Set([0.1,0.2,0.3]).asin(), [0.1001674211615598, 0.2013579207903308, 0.3046926540153975], 'Math.asin each')
  t.deepEquals(new Set([1,-5,10]).atan(), [0.7853981633974483, -1.373400766945016, 1.4711276743037347], 'Math.atan each')
  t.deepEquals(new Set([-0.1,4.1,9.9]).ceil(), [0, 5, 10], 'Math.ceil each')
  t.deepEquals(new Set([-0.1,4.1,9.9]).exp(), [0.9048374180359595, 60.34028759736195, 19930.370438230297], 'Math.exp each')
  t.deepEquals(new Set([-0.1,4.1, 9]).floor(), [-1, 4, 9], 'Math.floor each')
  t.deepEquals(new Set([1,5,10]).log(), [0, 1.6094379124341003, 2.302585092994046], 'Math.log each')
  t.deepEquals(new Set([1,-5,10]).pow(4), [1, 625, 10000], 'Math.pow(4) each')
  t.deepEquals(new Set([1,-180,360]).sin(), [0.8414709848078965, 0.8011526357338304, 0.9589157234143065], 'Math.sin() each')
  t.deepEquals(new Set([9, 4, 16]).sqrt(), [3, 2, 4], 'Math.sqrt each')
  t.deepEquals(new Set([9, 4, 16]).tan(), [-0.45231565944180985, 1.1578212823495775, 0.3006322420239034], 'Math.tan each')
  t.deepEquals(new Set([1.4, 4.6, 9.99]).round(), [1, 5, 10], 'Math.round each')
  t.deepEquals(new Set([2,5,7,2,4]).sortAsc(), [2,2,4,5,7], 'sortAsc')
  t.deepEquals(new Set([2,5,7,2,4]).sortDesc(), [7,5,4,2,2], 'sortDesc')
  t.deepEquals(new Set([7,5,4,2,2,1,9,8]).toMatrix(4), [[7,5],[4,2],[2,1],[9,8]], 'toMatrix(4)')
  t.end()
})

test('methods should return a number', function (t) {
  t.deepEquals(set2.max(), 50, 'max')
  t.deepEquals(set2.min(), 20, 'min')
  t.deepEquals(set2.sum(), 260, 'sum')
  t.deepEquals(set2.mean(), 37.142857142857146, 'mean')
  t.deepEquals(set2.range(), 30, 'range')
  t.deepEquals(set2.variance(false), 106.12244897959182, 'population variance')
  t.deepEquals(set2.variance(), 123.8095238095238, 'sample variance')
  t.deepEquals(set2.stdDeviation(false), 10.301575072754254, 'population stdDeviation')
  t.deepEquals(set2.stdDeviation(), 11.126972805283735, 'sample stdDeviation')
  t.end()
})

test('methods should return an object', function (t) {
  t.deepEquals(set2.stdDeviation(0.95), {
      confidence: 0.95
    , lower:  7.17014792596768
    , upper:  24.502329752802414
    , value:  11.126972805283735
    , length: 7
    , alpha:  0.05
  }, 'population stdDeviation')
  t.deepEquals(set2.stdDeviation(0.99), {
      confidence: 0.99
    , lower:  6.328619373739999
    , upper:  33.156378379383284
    , value:  11.126972805283735
    , length: 7
    , alpha:  0.01
  }, 'sample stdDeviation')
  t.deepEquals(new Set().confidenceInterval(10, 25, 0.95), {
      confidence: 0.95
    , lower:  7.8082837022038385
    , upper:  13.91152167506889
    , value:  10
    , length: 25
    , alpha:  0.05
  }, 'confidenceInterval')
  t.end()
})
