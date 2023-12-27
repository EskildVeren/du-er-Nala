/*
Functional code where the logic lies
*/
let direction = null
let pause = false
let isMoving = false

const player = new GameObject(4, 5, playerImg)
const gameBoard = new Player(background, player)

gameBoard.draw()
player.draw()

function frameCycle() {
    //Check where to move
    if (direction != null) {
        movementMappings.forEach(moveType => {
            if (direction == moveType.direction) {
                player.move(moveType.vx, moveType.vy)
            }
        });
        addVacuum()
        moveVacuums()
        direction = null
        isMoving = false
    }
    //Draw objects
    gameBoard.draw()
    gameBoard.citrusEntities.forEach( entity => {
        entity.draw()
    });
    player.draw()

    if (gameBoard.playerHit()) {
        pause = true
        ctx.fillRect(0,0,canvasWidth, canvasHeight)
        
    }

    //Run if not paused
    if (!pause) {
        requestAnimationFrame(frameCycle)
    }
    else {
        console.log("Paused game!");
    }
    killOldVacuums()
}

requestAnimationFrame(frameCycle)