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
