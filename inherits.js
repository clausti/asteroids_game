Function.prototype.inherits = function(parent) {
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
}

function Animal() {};

Animal.prototype.bark = function() {
  console.log("bark");
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.meow = function() {
  console.log("meow");
}

Dog.inherits(Animal);

d = new Dog("earl");
d.bark();

a = new Animal();
a.meow();