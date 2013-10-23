(function() {

  var Asteroids = window.Asteroids = window.Asteroids || {}


  Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
  }

  function MovingObject(pos, vel, radius, color) {
    this.pos = pos; // [y, x]
    this.vel = vel; // pixels per ms [y, x]
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function(unitTime) {
    // take time elapsed, update position based on velocity,
    // which is equal to distance/time

    yVel = this.vel[0];
    xVel = this.vel[1];
    xPos = this.pos[0];
    yPos = this.pos[1];

    //vel times unitTime = difference, then add to position
  }


  MovingObject.prototype.draw = function(cvx) {
    // draws a circle with position and radius and color
  }

  MovingObject.prototype.isCollidedWith = function(otherObj) {
    // computes distance between two centers
    // if sum of radii is greater than distance, they are collided

  }

})(window);