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

function addVacuum() {
    let newVacuum = null;
    //gameBoard.entities.add(newVacuum)
    const startingPosition = Math.floor(Math.random()*4)
    console.log("startingposition ", newVacuum);
    if (startingPosition==0) {
        const x = -1
        const y = Math.floor(Math.random() * yTiles)
        newVacuum = new Vacuum(x, y, arrowRightImg, 1, 0)
        rightVacuums.vacuums.push(newVacuum)
    }
    if (startingPosition==1) {
        const x = xTiles
        const y = Math.floor(Math.random() * yTiles)
        newVacuum = new Vacuum(x, y, arrowLeftImg, -1, 0)
        leftVacuums.vacuums.push(newVacuum)
    }
    if (startingPosition==2) {
        const x = Math.floor(Math.random() * xTiles)
        const y = -1
        newVacuum = new Vacuum(x, y, arrowDownImg, 0, 1)
        downVacuums.vacuums.push(newVacuum)
    }
    if (startingPosition==3) {
        const x = Math.floor(Math.random() * xTiles)
        const y = yTiles
        newVacuum = new Vacuum(x, y, arrowUpImg, 0, -1)
        upVacuums.vacuums.push(newVacuum)
    }
    gameBoard.citrusEntities.push(newVacuum)
    console.log(gameBoard.entities);
}