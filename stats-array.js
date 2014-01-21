var sdist = require ('./libs/statistics-distributions.js');

function extendStats (object) {

  //
  // Math applied to an array of numbers
  //
  Object.defineProperty(object, 'abs', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.abs(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'acos', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.acos(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'asin', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.asin(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'atan', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.atan(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'ceil', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.ceil(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'cos', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.cos(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'exp', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.exp(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'floor', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.floor(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'log', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.log(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'pow', {
    value: function (x) {
      for (var i=0; i<this.length; i++) this[i] = Math.pow(this[i], x)
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'sin', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.sin(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'sqrt', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.sqrt(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'tan', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.tan(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'max', {
    value: function () {
      return Math.max.apply({}, this)
    }
    , writable: true
  })

  Object.defineProperty(object, 'min', {
    value: function () {
      return Math.min.apply({}, this)
    }
    , writable: true
  })

  Object.defineProperty(object, 'round', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.round(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(object, 'roundTo', {
    value: function (to) {
      for (var i=0; i<this.length; i++) {
        this[i] = Math.round(this[i] * to) / to
      }
      return this
    }
    , writable: true
  })

  //
  // Additional statistical functions applied to an array of numbers
  //
  Object.defineProperty(object, 'sum', {
    value: function () {
      var sum = 0
      for (var i=0; i<this.length; i++) sum += Number(this[i])
      return sum
    }
    , writable: true
  })

  Object.defineProperty(object, 'mean', {
    value: function () {
      return this.sum() / this.length
    }
    , writable: true
  })

  Object.defineProperty(object, 'range', {
    value: function () {
      return this.max() - this.min()
    }
    , writable: true
  })

  // bool indicates population (default) or sample
  Object.defineProperty(object, 'variance', {
    value: function (bool) {
      var variance = 0
        , mean = this.mean()
        , sum = 0
      for (var i=0; i<this.length; i++) sum += Math.pow((this[i]-mean), 2);
      return sum / ( this.length - ((bool === false) ? 0 : 1) )
    }
    , writable: true
  })

  // bool indicates population (default) or sample
  Object.defineProperty(object, 'stdDeviation', {
    value: function (i, bool) {
      if (typeof i != 'number')
        return Math.sqrt(this.variance(i))
      else 
        return confidenceInterval(Math.sqrt(this.variance(bool)), this.length, i)
    }
    , writable: true
  })

  Object.defineProperty(object, 'marginOfError', {
    value: marginOfError, 
    writable: true
  })

  Object.defineProperty(object, 'sortAsc', {
    value: function () { 
      return this.sort(function (a,b) {
        return a - b
      })
    }
    , writable: true
  })

  Object.defineProperty(object, 'sortDesc', {
    value: function () { 
      return this.sort(function (a,b) {
        return b - a
      })
    }
    , writable: true
  })

  Object.defineProperty(object, 'toMatrix', {
    value: function (quantiles) {
      var indexes = []
        , matrix = []
        , matrixLength = quantiles || 2

      // this.sortAsc()
      for (var i=0; i<matrixLength; i++) {
        indexes[i] = []

        if (!!indexes[i-1]) 
          indexes[i][0] = indexes[i-1][1]
        else 
          indexes[i][0] = 0

        if (i === matrixLength) 
          indexes[i][1] = this.length - 1
        else 
          indexes[i][1] = Math.round((this.length)*(i+1) / matrixLength) //-1

        matrix[i] = this.slice(indexes[i][0], indexes[i][1])

      }
      return matrix
    }
    , writable: true
  })

  Object.defineProperty(object, 'confidenceInterval', {
    value: confidenceInterval
    , writable: true
  })

  Object.defineProperty(object, 'unique',{
    value: function () {
      var o = {}
        , i
        , l = this.length
        , r = []

        for(var i=0; i<l; i++) 
          o[this[i]] = this[i]

        for(var i in o) 
          r.push(o[i])

        return r
    }
    , writable: true
  })

  return object

}

function marginOfError (alpha) {
  var criticalValue = sdist.udistr((1-alpha)/2)
  var stdError = this.stdDeviation() / Math.sqrt(this.length)
  return criticalValue * stdError
}

function confidenceInterval (value, length, confidence) {
  var alpha = (1000 - confidence * 1000) / 1000
  var l = Math.sqrt((length - 1) / AChiSq((alpha/2), length - 1)) 
  var u = Math.sqrt((length - 1) / AChiSq(1 - (alpha/2), length - 1))
  return {
      confidence: 1 - alpha
    , lower: value * l 
    , upper: value * u 
    , value: value
    , length: length
    , alpha: alpha
  }
}

function AChiSq (p, n) { 
  var v = 0.5
  var dv = 0.5
  var x = 0

  while(dv > Math.pow(10, -15)) {
    x = 1 / v - 1
    dv = dv / 2

    if (ChiSq(x, n) > p) {
      v = v - dv
    }
    else {
      v = v + dv
    } 
  }
  return x
}

function Norm (z) {
  var q = z * z
  if (Math.abs(z) > 7)
    return (1 - 1 / q + 3 / (q * q)) * Math.exp(-q / 2)/(Math.abs(z) * Math.sqrt(Math.PI / 2) )
  else
    return ChiSq(q, 1)
}

function ChiSq (x, n) {
  if (x > 1000 || n > 1000) {
    var q = Norm(( Math.pow(x / n, 1/3) + 2 / (9 * n)-1) / Math.sqrt(2/(9 * n)) ) / 2

    if (x > n) 
      return q
    else
      return 1 - q
  }

  var p = Math.exp(-0.5 * x)

  if((n % 2)==1) { 
    p = p * Math.sqrt(2 * x / Math.PI)
  }

  var k = n

  while(k >= 2) {
    p = p * x / k
    k = k - 2
  }

  var t = p
  var a = n

  while(t > Math.pow(10, -15) * p) {
    a = a + 2
    t = t * x / a;
    p = p + t
  }

  return 1 - p

}

extendStats(Array.prototype)

module.exports = Array
