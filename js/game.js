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
    this.obstacleArr = [];
    this.timer = 0;
    
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
    this.detectCollision(this.obstacle);
    console.log(this.player.positionX)
    console.log(this.player.positionY)

    setInterval(() => {
      this.obstacleArr.forEach((obstacle) => {
        obstacle.moveDown();
        this.draw(obstacle);
        this.detectCollision(this.obstacle);
        console.log(this.player.positionX)
    console.log(this.player.positionY)
      });

      if (this.timer % 5 === 0) {
        const newObstacle = new Obstacle();
        newObstacle.domElement = this.create("obstacle");
        this.obstacleArr.push(newObstacle);
      }
      this.timer++;
    }, 100);

    
  }

  /*  setInterval(() => {
      this.obstacle.moveDown();
      this.draw(this.obstacle);
    }, 100); */

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

  detectCollision(obstacle) {
    // P.y v O.y
    // P.x v O.x
    // P.x v O.y
    // p.y v O.x

  //   if (
  //     this.player.positionX === obstacle.positionX + obstacle.width &&
  //     this.player.positionY + this.player.height === obstacle.positionY  &&
  //     this.player.positionX === obstacle.positionY + obstacle.h &&
  //     this.player.positionY === obstacle.positionX
  //   ) { console.log("collision detected")
  // throw new error("collision detected");
  //   }
  }
}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null;
    this.width = 5;
    this.height = 5;
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
    this.width = 5;
    this.height = 5;
  }

  moveDown() {
    this.positionY--;
  }
}
