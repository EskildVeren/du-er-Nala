/*
Functional code where the logic lies
*/
gameBoard.draw()

body.addEventListener("keydown", registerKeypress)


function registerKeypress(e) {

    if (e.keyCode == 38) {
        direction="up"
    }
    else if (e.keyCode == 39) {
        console.log("RIGHT");
        direction="right"
    }
    else if (e.keyCode == 37) {
        console.log("LEFT");
        direction="left"
    }
    else if (e.keyCode == 40) {
        console.log("DOWN");
        direction="down"
    }
    else {
        console.log(e.keyCode);
    }
}