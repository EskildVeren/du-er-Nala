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


function catIsHit() {
    allVacuums.forEach(vacuumList => {
        vacuumList.vacuums.forEach(vacuum => {
            if (vacuum.catIsHit) {
                return true
            }
        })
    })
    return false
}

function createVacuum(vacuumList, x, y) {
    vacuumList.add(new Vacuum(x, y, secondary))
}

const vacuumGoingLeft = {
    startX: xTiles,
    startY: Math.floor(Math.random() * yTiles),
    vx: -1,
    vy: 0,
    sprite: arrowLeftImg
}
const vacuumGoingUp = {
    startX: Math.floor(Math.random() * xTiles),
    startY: yTiles,
    vx: 0,
    vy: -1,
    sprite: arrowUpImg
}
const vacuumGoingRight = {
    startX: -1,
    startY: Math.floor(Math.random() * yTiles),
    vx: 1,
    vy: 0,
    sprite: arrowRightImg
}
const vacuumGoingDown = {
    startX: Math.floor(Math.random() * xTiles),
    startY: -1,
    vx: 0,
    vy: 1,
    sprite: arrowDownImg
}
const vacuumDirections = [vacuumGoingLeft, vacuumGoingUp, vacuumGoingRight, vacuumGoingDown]

function addVacuum() {
    const randomDirectionIndex = Math.floor(Math.random()*4)
    const chosenVacuumDirection = vacuumDirections[randomDirectionIndex]
    
    const startX = chosenVacuumDirection.startX
    const startY = chosenVacuumDirection.startY
    const vx = chosenVacuumDirection.vx
    const vy = chosenVacuumDirection.vy
    const sprite = chosenVacuumDirection.sprite

    newVacuum = new Vacuum(startX, startY, sprite, vx, vy)

    gameBoard.citrusEntities.push(newVacuum)
    console.log(gameBoard.entities);
}