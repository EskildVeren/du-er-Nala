/*
Functional code where the logic lies
*/
let direction = null
let pause = false
let isMoving = false
let gameTurn = 0

const player = new Player(4, 5, playerImg)
const gameBoard = new GameBoard(background, player)

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
        addVacuums(gameTurn, 0.2)
        moveVacuums()
        direction = null
        isMoving = false
        gameTurn++

        //Draw objects
        gameBoard.draw()
        gameBoard.citrusEntities.forEach( entity => {
            entity.draw()
        });
        player.draw()

        if (gameBoard.playerHit()) {
            pause = true
            gameBoard.draw()
            gameBoard.citrusEntities.forEach( entity => {
                entity.draw()
            });
        }

        killOldVacuums()
    }
    //Run if not paused
    if (!pause) {
        requestAnimationFrame(frameCycle)
    }
    else {
        console.log("Paused game!");
    }
}

requestAnimationFrame(frameCycle)