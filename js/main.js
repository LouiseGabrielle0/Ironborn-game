// option to add - when the user presses a button - create an instance to start the game

function createDomElement(className) {
    const board = document.getElementById("board");
    const newElm = document.createElement("div");
    newElm.className = className;
    
    board.appendChild(newElm);

    return newElm;
}

function drawDomElement(instance){
console.log("new horizontal position " + instance.positionX)
console.log("new")
instance.domElement.style.left = instance.positionX + "%";
instance.domElement.style.bottom = instance.positionY + "%";


// instance.domElement.style.backgroundColor = "red" // to change color
}


const game = new Game(createDomElement, drawDomElement);
game.start();

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    game.movePlayer("right");
    console.log("we want to move to the right");
  } else if (event.key === "ArrowLeft") {
    game.movePlayer("left");
    console.log("we want to move to the left");
  }
});

