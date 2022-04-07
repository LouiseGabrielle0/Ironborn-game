console.log("hello world!");
/*
info:
 - position
functionality:
- moveLeft()
- moveRight()
*/

class Game {
  constructor(create, draw) {
    this.player = null;
    this.create = create;
    this.draw = draw;
    // this.score = 0
    // this.timer = 0
  }

  start() {
    this.player = new Player();
    this.player.domElement = this.create("player");
    this.draw(this.player);

    this.obstacle = new Obstacle();
    this.obstacle.domElement = this.create("obstacle");
    this.draw(this.obstacle);

    console.log(this.obstacle);

    setInterval(() => {
      this.obstacle.moveDown();
      this.draw(this.obstacle);
    }, 100);

    this.createMoreObstacles();
  
  }

  movePlayer(direction) {
    if (direction === "left") {
      this.player.moveLeft();
      console.log("we moved to the left");
    } else if (direction === "right") {
      this.player.moveRight();
      console.log("we moved to the right");
    }
    this.draw(this.player);
  }

  createMoreObstacles() {    
    console.log("create more obstacles")
}

}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null;
  }

  moveLeft() {
    this.positionX--;
  }

  moveRight() {
    this.positionX++;
  }
}

class Obstacle {
  constructor() {
    this.positionX = Math.floor(Math.random() * 100); // if we want the obstacles to be random this needs to be a random number
    this.positionY = 97;
    this.domElement = null;
  }

  moveDown() {
    this.positionY--;
  }

  
}