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
    this.intervalID = null; // this will allow me to clearInterval(this)
    this.bonusArr = [];
    // this.score = 0
    // this.timer = 0
  }

  start() {
    this.player = new Player();
    this.player.domElement = this.create("player");
    this.draw(this.player);
    this.displayLife();
    this.displayScore();
    this.obstacle = new Obstacle();
    this.bonus = new Bonus();
    //this.draw(this.bonus);
    // this.bonus.domElement = this.create("bonus");

    this.intervalID = setInterval(() => {
      this.obstacleArr.forEach((obstacle) => {
        obstacle.moveDown();
        this.draw(obstacle);
        this.detectCollision(obstacle);
        this.deleteObstacle(obstacle); // removes obstacle when reaches the bottom of the screen
      });

      if (this.timer % 5 === 0) {
        const newObstacle = new Obstacle();
        newObstacle.domElement = this.create("obstacle");
        this.obstacleArr.push(newObstacle);
      }

      this.bonusArr.forEach((bonus) => {
        this.draw(bonus);
        this.detectCollection(bonus);
      });

      if (this.timer % 300 === 0) {
        const newBonus = new Bonus();
        newBonus.domElement = this.create("bonus");
        this.bonusArr.push(newBonus);
      }

      this.timer++;
    }, 100);
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
    } else if (direction === "up" && this.player.positionY < 95) {
      this.player.moveUp();
    } else if (direction === "down" && this.player.positionY > 0) {
      this.player.moveDown();
    }
    this.draw(this.player);
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
        this.gameOver();
      }
    }
  }

  detectCollection(bonus) {
    if (
      this.player.positionX < bonus.positionX + bonus.width &&
      this.player.positionX + this.player.width > bonus.positionX &&
      this.player.positionY < bonus.positionY + bonus.height &&
      this.player.height + this.player.positionY > bonus.positionY
    ) {
      this.player.score++;
      this.displayScore();
      this.bonusArr.splice(this.bonusArr.indexOf(bonus), 1);
      bonus.domElement.remove();
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

  displayScore() {
    let score = this.player.score;
    document.getElementById("score").textContent = score;
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
    this.score = 0;
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

  moveUp() {
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

  moveUp() {
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

  moveUp() {
    this.positionY++;
  }
}

class Bonus {
  constructor() {
    this.positionX = Math.floor(Math.random() * 95);
    this.positionY = Math.floor(Math.random() * 95);
    this.domElement = null;
    this.width = 3;
    this.height = 3;
  }
}
