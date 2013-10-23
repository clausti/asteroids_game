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

var s = sum.myBind(root, 1, 2);

console.log(s(3));