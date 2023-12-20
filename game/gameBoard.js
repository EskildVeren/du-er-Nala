class GameBoard {
    constructor(color) {
        this.color = color
    }
    draw() {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)

        const gridOffset = 0
        ctx.strokeStyle = text
        ctx.lineWidth = 1
        
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
}