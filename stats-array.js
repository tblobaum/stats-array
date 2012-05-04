
//
// Math applied to an array of numbers
//
Object.defineProperty(Array.prototype, 'abs', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.abs(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'acos', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.acos(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'asin', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.asin(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'atan', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.atan(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'ceil', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.ceil(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'cos', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.cos(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'exp', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.exp(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'floor', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.floor(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'log', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.log(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'pow', {
  value: function (exp) {
    for (var i=0; i<this.length; i++) this[i] = Math.pow(this[i], exp)
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'sin', {
  value: function (exp) {
    for (var i=0; i<this.length; i++) this[i] = Math.sin(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'sqrt', {
  value: function (exp) {
    for (var i=0; i<this.length; i++) this[i] = Math.sqrt(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'tan', {
  value: function (exp) {
    for (var i=0; i<this.length; i++) this[i] = Math.tan(this[i])
    return this
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'max', {
  value: function () {
    return Math.max.apply({}, this)
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'min', {
  value: function () {
    return Math.min.apply({}, this)
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'round', {
  value: function () {
    for (var i=0; i<this.length; i++) this[i] = Math.round(this[i])
    return this
  }
  , writable: true
})

//
// Additional statistical functions applied to an array of numbers
//
Object.defineProperty(Array.prototype, 'sum', {
  value: function () {
    var sum = 0
    for (var i=0; i<this.length; i++) sum += this[i]
    return sum
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'mean', {
  value: function () {
    return Math.round(this.sum() / this.length)
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'range', {
  value: function () {
    return this.max() - this.min()
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'matrix', {
  value: function (num) {
    var indexes = []
      , matrix = []
      , matrixLength = num || 2
    this.sortAsc()
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

// bool indicates population (default) or sample
Object.defineProperty(Array.prototype, 'variance', {
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
Object.defineProperty(Array.prototype, 'standardDeviation', {
  value: function (bool) {
    return Math.sqrt(this.variance(bool))
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'sortAsc', {
  value: function () { 
    return this.sort(function (a,b) {
      return a - b
    })
  }
  , writable: true
})

Object.defineProperty(Array.prototype, 'sortDesc', {
  value: function () { 
    return this.sort(function (a,b) {
      return b - a
    })
  }
  , writable: true
})

module.exports = Array
