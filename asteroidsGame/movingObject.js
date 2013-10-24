(function() {

  var Asteroids = window.Asteroids = window.Asteroids || {};

   var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
    this.pos = pos; // [x, y]
    this.vel = vel; // pixels per frame [x, y]
    this.radius = radius;
    this.color = color;
  };

  MovingObject.prototype.move = function() {
    this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])];
    this.pos[0] = (Asteroids.Game.DIMX + this.pos[0]) % Asteroids.Game.DIMX;
    this.pos[1] = (Asteroids.Game.DIMX + this.pos[1]) % Asteroids.Game.DIMX;
  };


  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.hasCollidedWith = function(otherObj) {
    var dX = this.pos[0] - otherObj.pos[0]
    var dY = this.pos[1] - otherObj.pos[1]
    var clearance = Math.sqrt( Math.pow(dX, 2) + Math.pow(dY, 2) );

    var radiiSum = this.radius + otherObj.radius

    return ( radiiSum > clearance)
  };

})();






