function sum() {
  var total = 0;
  for (var i=0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

Function.prototype.myBind = function() {
  var args = Array.prototype.slice.call(arguments);

  var obj = args[0];
  var func = this;
  var args = args.slice(1);

  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    return func.apply(obj, args.concat(args2));
  }
}

// var s = sum.myBind(root, 1, 2);
//
// console.log(s(3));


var curriedSum = function(numNums) {
  var numbers = [];
  var sum = 0;

  var _curriedSum = function(nextNum) {
    numbers.push(nextNum);
    if (numbers.length == numNums) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// var sum3 = curriedSum(3)
// console.log(sum3(1)(2)(3))


Function.prototype.curry = function(numArgs) {
  var that = this;
  var args = [];

  var _curried = function(nextArg) {
    args.push(nextArg);
    if (args.length === numArgs) {
      return that.apply(that, args)
    } else {
      return _curried
    }
  }
  return _curried;
}

var sum3 = sum.curry(3);
console.log(sum3(1)(2)(3));





