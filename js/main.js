// option to add - when the user presses a button - create an instance to start the game

function createDomElement(className) {
    const board = document.getElementById("board");
    const newElm = document.createElement("div");
    newElm.className = className;
    
    board.appendChild(newElm);

    return newElm;
}

function drawDomElement(instance){
instance.domElement.style.width = instance.width + "%";
instance.domElement.style.height = instance.height + "%";
instance.domElement.style.left = instance.positionX + "%";
instance.domElement.style.bottom = instance.positionY + "%";
}

const game = new Game(createDomElement, drawDomElement);
game.start();

document.addEventListener("keydown", function (event) {
  switch (event.key){
    case "ArrowRight":
      game.movePlayer("right");
      break;
    case "ArrowLeft":
      game.movePlayer("left");
      break;
    case "ArrowUp":
      game.movePlayer("up");
      break;
    case "ArrowDown":
      game.movePlayer("down");
      break;
    case "s":
        if (game.run === false){
          game.run = true;
          game.runGame();
        } else if (game.run === true){
          game.run = false;
          game.pauseGame();
        };
        break;
      case " ":
        console.log("pressed to shoot")
        game.weaponShoot();
        break;
    }
  })
  
  // if (event.key === "ArrowRight") {
  //   game.movePlayer("right");
  // } else if (event.key === "ArrowUp"){
  //   game.movePlayer("up");
  // } else if (event.key === "ArrowDown"){
  //   game.movePlayer("down")
  // } else if (event.key === "ArrowLeft") {
  //   game.movePlayer("left");
  //  }




/* checkCollision() { 
if (instance.domElement.style.left < 0 || instance.domElement.style.left > 99) // horizontal position
STOP
*/