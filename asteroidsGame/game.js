(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function(ctx, numAsteroids) {
    this.ctx = ctx;
    this.numAsteroids = numAsteroids;
    this.asteroids = [];
  };

  Game.DIMX = 500;
  Game.DIMY = 500;
  Game.GAMESTEPTIME = 100; //milliseconds

  Game.addAsteroids = function(numAsteroids) {
    var asteroidSet = [];
    for (var i = 0; i <= numAsteroids; i++) {
      asteroidSet.push(Asteroids.Asteroid.randomAsteroid(this.DIMX, this.DIMY));
    }
    // console.log(asteroidSet);
    return asteroidSet;
  };

  Game.addShip = function() {
    console.log(Asteroids);
    return Asteroids.Ship.makeShip(this.DIMX, this.DIMY);
  };

  Game.prototype.bindKeyHandlers = function() {
    var that = this;
    key("space", function() {that.ship.fire});
    key("left", function() {that.ship.incDir(true)});
    key("right", function() {that.ship.incDir(false)});
    key("up", function() {that.ship.power([5, 5])});
    key("down", function() {that.ship.power([-5, -5])});
  };

  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIMX, Game.DIMY);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
    this.ship.draw(this.ctx)
  };

  Game.prototype.move = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
    this.ship.move();
  };

  Game.prototype.removeDropOffs = function() {
    var dropOffs = [];
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].pos[0] > 500 ||
          this.asteroids[i].pos[0] < 0   ||
          this.asteroids[i].pos[1] > 500 ||
          this.asteroids[i].pos[1] < 0 ) {
        dropOffs.push(this.asteroids[i]);
      }
    }
    for (var i = 0; i < dropOffs.length; i++) {
      var index = this.asteroids.indexOf(dropOffs[i]);
      this.asteroids.splice(index, 1);
    }
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].hasCollidedWith(this.ship)) {
        alert("Game Over!")
      }
    }
  };

  Game.prototype.stop = function() {
    clearInterval(this.timer);
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
    // this.removeDropOffs();
    this.checkCollisions;
  };

  Game.prototype.start = function() {
    this.asteroids = Game.addAsteroids(this.numAsteroids);
    this.ship = Game.addShip();
    this.bindKeyHandlers();
    this.timer = setInterval( this.step.bind(this), Game.GAMESTEPTIME);
  };

})();