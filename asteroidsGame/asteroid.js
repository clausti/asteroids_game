(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(pos, vel) {
       //pix per s in EITHER x or y
      Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
  };

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLOR = "grey";
  Asteroid.RADIUS = 25;
  Asteroid.MAXSPEED = 15;

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var pos = randPos(dimX, dimY);
    var vel = randVel();  // pixels per second
    return new Asteroid(pos, vel);
  };

  var randVel = Asteroid.randVel = function() {
    var xVec = ((Math.random() * 2) - 1) * Asteroid.MAXSPEED;
    var yVec = ((Math.random() * 2) - 1) * Asteroid.MAXSPEED;
    return [xVec, yVec];
  };

  var randPos = Asteroid.randPos = function(dimX, dimY) {
    var posX = Math.floor(Math.random() * dimX);
    var posY = Math.floor(Math.random() * dimY);
    return [posX, posY];
  };

})();