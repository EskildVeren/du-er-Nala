class GameBoard {
    constructor(color) {
        this.color = color
        this.entities = []
        this.stopEntities = []
        this.pushEntities = []
    }
    draw() {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)

        const gridOffset = 0
        ctx.strokeStyle = text
        ctx.lineWidth = 2

        for (let x = tileSize; x <= canvasWidth-tileSize; x+=tileSize) {
            ctx.beginPath()
            ctx.moveTo(x, gridOffset)
            ctx.lineTo(x, canvasHeight-gridOffset)
            ctx.stroke()
        }
        for (let y = tileSize; y <= canvasHeight-tileSize; y+=tileSize) {
            ctx.beginPath()
            ctx.moveTo(gridOffset, y)
            ctx.lineTo(canvasWidth-gridOffset, y)
            ctx.stroke()
        }
    }
    canMove(movingEntity, vx, vy) {
        const newX = movingEntity.x + vx
        const newY = movingEntity.y + vy
        let canMove = true
        this.stopEntities.forEach(otherEntity => {
            if ((otherEntity.x == newX) && (otherEntity.y == newY) && (movingEntity !== otherEntity)) { 
                canMove = false
            }
        });

        this.pushEntities.forEach(otherEntity => {
            if ((otherEntity.x == newX) && (otherEntity.y == newY) && (movingEntity !== otherEntity)) { 
                if (this.canMove(otherEntity, vx, vy)) {
                    otherEntity.move(vx, vy)
                }
                else {
                    canMove = false
                }
            }
        });
        return canMove
    }

}