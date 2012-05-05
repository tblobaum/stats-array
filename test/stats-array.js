var test = require('tap').test
  , Set = require('../')
  , set2 = [ 50, 40, 30, 20, 30, 40, 50 ]

test('Arrays should have methods', function (t) {
  t.ok([].abs, 'abs')
  t.ok([].acos, 'acos')
  t.ok([].asin, 'asin')
  t.ok([].atan, 'atan')
  t.ok([].ceil, 'ceil')
  t.ok([].exp, 'exp')
  t.ok([].floor, 'floor')
  t.ok([].log, 'log')
  t.ok([].pow, 'pow')
  t.ok([].sin, 'sin')
  t.ok([].sqrt, 'sqrt')
  t.ok([].tan, 'tan')
  t.ok([].max, 'max')
  t.ok([].min, 'min')
  t.ok([].round, 'round')
  t.ok([].sum, 'sum')
  t.ok([].mean, 'mean')
  t.ok([].range, 'range')
  t.ok([].variance, 'variance')
  t.ok([].stdDeviation, 'stdDeviation')
  t.ok([].confidenceInterval, 'confidenceInterval')
  t.ok([].sortAsc, 'sortAsc')
  t.ok([].sortDesc, 'sortDesc')
  t.ok([].toMatrix, 'toMatrix')
  t.end()
})

test('methods should return a stats array', function (t) {
  t.deepEquals([1,-5,10].abs()
    , [1,5,10]
    , 'Math.abs each')
  t.deepEquals([0.1,0.2,0.3].acos()
    , [1.4706289056333368,1.369438406004566,1.2661036727794992]
    , 'Math.acos each')
  t.deepEquals([0.1,0.2,0.3].asin()
    , [0.1001674211615598, 0.2013579207903308, 0.3046926540153975]
    , 'Math.asin each')
  t.deepEquals([1,-5,10].atan()
    , [0.7853981633974483, -1.373400766945016, 1.4711276743037347]
    , 'Math.atan each')
  t.deepEquals([-0.1,4.1,9.9].ceil()
    , [0, 5, 10]
    , 'Math.ceil each')
  t.deepEquals([-0.1,4.1,9.9].exp()
    , [0.9048374180359595, 60.34028759736195, 19930.370438230297]
    , 'Math.exp each')
  t.deepEquals([-0.1,4.1, 9].floor()
    , [-1, 4, 9]
    , 'Math.floor each')
  t.deepEquals([1,5,10].log()
    , [0, 1.6094379124341003, 2.302585092994046]
    , 'Math.log each')
  t.deepEquals([1,-5,10].pow(4)
    , [1, 625, 10000]
    , 'Math.pow(4) each')
  t.deepEquals([1,-180,360].sin()
    , [0.8414709848078965, 0.8011526357338304, 0.9589157234143065]
    , 'Math.sin() each')
  t.deepEquals([9, 4, 16].sqrt()
    , [3, 2, 4]
    , 'Math.sqrt each')
  t.deepEquals([9, 4, 16].tan()
    , [-0.45231565944180985, 1.1578212823495775, 0.3006322420239034]
    , 'Math.tan each')
  t.deepEquals([1.4, 4.6, 9.99].round()
    , [1, 5, 10]
    , 'Math.round each')
  t.deepEquals([2,5,7,2,4].sortAsc()
    , [2,2,4,5,7]
    , 'sortAsc')
  t.deepEquals([2,5,7,2,4].sortDesc()
    , [7,5,4,2,2]
    , 'sortDesc')
  t.deepEquals([7,5,4,2,2,1,9,8].toMatrix(4)
    , [[7,5],[4,2],[2,1],[9,8]]
    , 'toMatrix(4)')
  t.end()
})

test('methods should return a number', function (t) {
  t.deepEquals(set2.max(), 50, 'max')
  t.deepEquals(set2.min(), 20, 'min')
  t.deepEquals(set2.sum(), 260, 'sum')
  t.deepEquals(set2.mean(), 37.142857142857146, 'mean')
  t.deepEquals(set2.range(), 30, 'range')
  t.deepEquals(set2.variance(false)
    , 106.12244897959182
    , 'population variance')
  t.deepEquals(set2.variance()
    , 123.8095238095238
    , 'sample variance')
  t.deepEquals(set2.stdDeviation(false)
    , 10.301575072754254
    , 'population stdDeviation')
  t.deepEquals(set2.stdDeviation()
    , 11.126972805283735
    , 'sample stdDeviation')
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
  t.deepEquals(Array.prototype.confidenceInterval(10, 25, 0.95), {
      confidence: 0.95
    , lower:  7.8082837022038385
    , upper:  13.91152167506889
    , value:  10
    , length: 25
    , alpha:  0.05
  }, 'confidenceInterval')
  t.end()
})
