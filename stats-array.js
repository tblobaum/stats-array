
function ctor (array) { 
  console.log('new stats array')
  var x = Array.prototype.slice.call(array || [])
  x = extendStats(x)
  return x
}

function extendStats (proto) {

  //
  // Math applied to an array of numbers
  //
  Object.defineProperty(proto, 'abs', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.abs(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'acos', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.acos(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'asin', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.asin(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'atan', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.atan(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'ceil', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.ceil(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'cos', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.cos(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'exp', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.exp(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'floor', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.floor(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'log', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.log(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'pow', {
    value: function (exp) {
      for (var i=0; i<this.length; i++) this[i] = Math.pow(this[i], exp)
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'sin', {
    value: function (exp) {
      for (var i=0; i<this.length; i++) this[i] = Math.sin(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'sqrt', {
    value: function (exp) {
      for (var i=0; i<this.length; i++) this[i] = Math.sqrt(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'tan', {
    value: function (exp) {
      for (var i=0; i<this.length; i++) this[i] = Math.tan(this[i])
      return this
    }
    , writable: true
  })

  Object.defineProperty(proto, 'max', {
    value: function () {
      return Math.max.apply({}, this)
    }
    , writable: true
  })

  Object.defineProperty(proto, 'min', {
    value: function () {
      return Math.min.apply({}, this)
    }
    , writable: true
  })

  Object.defineProperty(proto, 'round', {
    value: function () {
      for (var i=0; i<this.length; i++) this[i] = Math.round(this[i])
      return this
    }
    , writable: true
  })

  //
  // Additional statistical functions applied to an array of numbers
  //
  Object.defineProperty(proto, 'sum', {
    value: function () {
      var sum = 0
      for (var i=0; i<this.length; i++) sum += Number(this[i])
      return sum
    }
    , writable: true
  })

  Object.defineProperty(proto, 'mean', {
    value: function () {
      return Math.round(this.sum() / this.length)
    }
    , writable: true
  })

  Object.defineProperty(proto, 'range', {
    value: function () {
      return this.max() - this.min()
    }
    , writable: true
  })

  // bool indicates population (default) or sample
  Object.defineProperty(proto, 'variance', {
    value: function (bool) {
      var variance = 0
        , mean = this.mean()
        , sum = 0
      for (var i=0; i<this.length; i++) sum += Math.pow((this[i]-mean), 2);
      return sum/(this.length-(bool?1:0))
    }
    , writable: true
  })

  // bool indicates population (default) or sample
  Object.defineProperty(proto, 'standardDeviation', {
    value: function (bool) {
      return Math.sqrt(this.variance(bool))
    }
    , writable: true
  })

  Object.defineProperty(proto, 'sortAsc', {
    value: function () { 
      return this.sort(function (a,b) {
        return a - b
      })
    }
    , writable: true
  })

  Object.defineProperty(proto, 'sortDesc', {
    value: function () { 
      return this.sort(function (a,b) {
        return b - a
      })
    }
    , writable: true
  })

  //
  // Fix length property
  //
  // Object.defineProperty(proto, 'length', {
  //   enumerable: false
  // })

  Object.defineProperty(proto, 'matrix', {
    value: function (num) {
      var indexes = new ctor()
        , matrix = new ctor()
        , matrixLength = num || 2

      this.sortAsc()
      for (var i=0; i<matrixLength; i++) {
        indexes[i] = new ctor()

        if (!!indexes[i-1]) 
          indexes[i][0] = indexes[i-1][1]
        else 
          indexes[i][0] = 0

        if (i === matrixLength) 
          indexes[i][1] = this.length - 1
        else 
          indexes[i][1] = Math.round((this.length)*(i+1) / matrixLength) //-1

        matrix[i] = new ctor(this.slice(indexes[i][0], indexes[i][1]))

      }
      return matrix
    }
    , writable: true
  })

  return proto

}

module.exports = ctor
