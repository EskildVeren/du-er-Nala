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

function setupGame() {
    gameBoard.draw()
    player.draw()
}

function moveVacuums() {
    allVacuums.forEach(vacuumList => {
        vacuumList.vacuums.forEach(vacuum => {
            vacuum.move(vacuumList.vx, vacuumList.vy)
            vacuum.draw()
        })
    })
}

function createVacuum(vacuumList, x, y) {
    vacuumList.add(new Vacuum(x, y, secondary))
}