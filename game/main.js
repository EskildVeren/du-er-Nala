/*
Functional code where the logic lies
*/
gameBoard.draw()

body.addEventListener("keydown", registerKeypress)


function registerKeypress(e) {

    movementMappings.forEach(moveType => {
        if (moveType.keyCode == e.keyCode) {
            direction = moveType.direction
        }
    });

    if (e.keyCode == 80) {
        pause = !pause
        frameCycle()
    }

    else {
        console.log(e.keyCode);
    }
}
function setupGame() {
    gameObject.draw()
}

function frameCycle() {
    //Check where to move
    if (direction != null) {
        movementMappings.forEach(moveType => {
            if (direction == moveType.direction) {
                gameObject.move(moveType.vx, moveType.vy)
                direction = null
            }
        });
    }
    //Draw objects
    gameBoard.draw()
    gameObject.draw()

    //Run if not paused
    if (!pause) {
        requestAnimationFrame(frameCycle)
    }
    else {
        console.log("Paused game!");
    }
}

setupGame()

requestAnimationFrame(frameCycle)