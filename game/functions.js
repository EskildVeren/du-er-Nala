/*
Functions used by main.js
*/

function registerKeypress(e) {
    movementMappings.forEach(moveType => {
        if (moveType.keyCode == e.keyCode && !isMoving) {
            isMoving == true
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

body.addEventListener("keydown", registerKeypress)

function moveVacuums() {
    gameBoard.citrusEntities.forEach(vacuum => {
        vacuum.move()
        vacuum.draw()
    })
}

const vacuumDirections = [vacuumGoingLeft, vacuumGoingUp, vacuumGoingRight, vacuumGoingDown]

function addVacuum() {
    const randomDirectionIndex = Math.floor(Math.random()*4)
    const vacuumData = vacuumDirections[randomDirectionIndex]
    
    let startX = vacuumData.startX
    let startY = vacuumData.startY

    if (startX == "random") {
        startX = Math.floor(Math.random() * xTiles)
    }
    else if (startY == "random") {
        startY = Math.floor(Math.random() * yTiles)
    }

    newVacuum = new Vacuum(startX, startY, vacuumData.sprite, vacuumData.vx, vacuumData.vy)

    gameBoard.citrusEntities.push(newVacuum)
    console.log(gameBoard.citrusEntities);
}