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
    this.intervalID = null   // this will allow me to clearInterval(this)

    // this.score = 0
    // this.timer = 0
  }

  start() {
    this.player = new Player();
    this.player.domElement = this.create("player");
    this.draw(this.player);
    this.displayLife();
    this.obstacle = new Obstacle();
    // this.obstacle.domElement = this.create("obstacle");
    // this.draw(this.obstacle);

this.intervalID =  setInterval(() => {
      this.obstacleArr.forEach((obstacle) => {
        obstacle.moveDown();
        this.draw(obstacle);
        this.detectCollision(obstacle);
        this.deleteObstacle(obstacle);
      
      });

      if (this.timer % 5 === 0) {
        const newObstacle = new Obstacle();
        newObstacle.domElement = this.create("obstacle");
        this.obstacleArr.push(newObstacle);
      }
      this.timer++;
    }, 100);

    console.log(this.player.positionX);
  }

  /*  setInterval(() => {
      this.obstacle.moveDown();
      this.draw(this.obstacle);
    }, 100); */

  movePlayer(direction) {
    if (direction === "left" && this.player.positionX > 0) {
      this.player.moveLeft();
    } else if (direction === "right" && this.player.positionX < 95) {
      this.player.moveRight();
    }  else if (direction === "up" && this.player.positionY < 95) {
      this.player.moveUp();
    }  else if (direction === "down" && this.player.positionY > 5) {
      this.player.moveDown();
    }
    this.draw(this.player);
    console.log("the x position is " + this.player.positionX + "the y position is" + this.player.positionY)
  }

  detectCollision(obstacle) {
    if (
      this.player.positionX < obstacle.positionX + obstacle.width &&
      this.player.positionX + this.player.width > obstacle.positionX &&
      this.player.positionY < obstacle.positionY + obstacle.height &&
      this.player.height + this.player.positionY > obstacle.positionY
    ) {
      this.player.life--;
      this.displayLife();
      this.obstacleArr.splice(this.obstacleArr.indexOf(obstacle), 1);
      obstacle.domElement.remove();
      if (this.player.life === -1) {
      this.gameOver();}
    }
  }

  deleteObstacle(obstacle) {
    if (obstacle.positionY === 0) {
      this.obstacleArr.splice(this.obstacleArr.indexOf(obstacle), 1);
      obstacle.domElement.remove();
    }
  }

  gameOver() {
    alert("Game Over");
    location.reload();
  }

  displayLife() {
    let lifeLeft = this.player.life;
    document.getElementById("life").textContent = lifeLeft;
  }
}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null;
    this.width = 5;
    this.height = 5;
    this.life = 3;
  }

  moveLeft() {
    this.positionX--;
  }

  moveRight() {
    this.positionX++;
  }

  moveDown() {
    this.positionY--;
  }
 
  moveUp(){
    this.positionY++;
  }
}

class Obstacle {
  constructor() {
    this.positionX = Math.floor(Math.random() * 95); 
    this.positionY = 97;
    this.domElement = null;
    this.width = 5;
    this.height = 5;
  }

  moveDown() {
    this.positionY--;
  }

  moveUp(){
    this.positionY++;
  }
}

class Weapon {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null;
    this.width = 1;
    this.height = 1;
   
}

moveUp(){
  this.positionY++;
}

}




