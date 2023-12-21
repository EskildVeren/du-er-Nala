/*
Functional code where the logic lies
*/
let gamemode = "normal"
body.addEventListener("keydown", registerKeypress)
summonObjectButton.addEventListener("click", ()=> setGamemode("Summon Object"))
giveStopButton.addEventListener("click", ()=> setGamemode("Give Stop"))
givePushButton.addEventListener("click", ()=> setGamemode("Give Push"))

function setGamemode(newGamemode) {
    gamemode = newGamemode
    console.log(gamemode);
}



function registerKeypress(e) {
    movementMappings.forEach(moveType => {
        if (moveType.keyCode == e.keyCode) {
            direction = moveType.direction
        }
    });
    //Pause if P is pressed
    if (e.keyCode == 80) {
        pause = !pause
        direction = null
        //Restart framecycle if pause is false
        if (!pause) {
            frameCycle()
        }
    }
}

function setupGame() {
    gameBoard.draw()
    player.draw()
}

function frameCycle() {
    //Check where to move
    if (direction != null) {
        movementMappings.forEach(moveType => {
            if (direction == moveType.direction) {
                console.log(gameBoard.canMove(player, moveType.vx, moveType.vy));
                if (gameBoard.canMove(player, moveType.vx, moveType.vy)) {
                    player.move(moveType.vx, moveType.vy)
                }
                direction = null
            }
        });
    }
    //Draw objects
    gameBoard.draw()
    gameBoard.entities.forEach( entity => {
        entity.draw()
    });

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