(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(dimX, dimY) {
    this.pos = [(dimX/2), (dimY/2)];
    this.vel = [0, 0];
    this.dirPointing = 3* Math.PI/2; //90 deg, expressed in radians, indp of vel
    Asteroids.MovingObject.call(this, this.pos, this.vel, Ship.RADIUS, Ship.COLOR);
  };

  Ship.RADIUS = 15;
  Ship.COLOR = "blue";

  Ship.inherits(Asteroids.MovingObject);

  Ship.makeShip = function(dimX, dimY){
    return new Ship(dimX, dimY);
  };

  Ship.prototype.incDir = function(leftIsTrue) {
    if (leftIsTrue) {
      this.dirPointing -= 0.2; //radians
    } else {
      this.dirPointing += 0.2; //radians
    }
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += (Math.cos(this.dirPointing) * impulse[0]);
    this.vel[1] += (Math.sin(this.dirPointing) * impulse[1]);
  };

  Ship.prototype.fire = function() {
    // add real firing
    console.log("pew pew!");
  };

})();