/*
Functional code where the logic lies
*/
function frameCycle() {
    //Check where to move
    if (direction != null) {
        movementMappings.forEach(moveType => {
            if (direction == moveType.direction) {
                if (gameBoard.canMove(player, moveType.vx, moveType.vy)) {
                    player.move(moveType.vx, moveType.vy)
                }
            }
        });
        moveVacuums()
        direction = null
        isMoving = false
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