class GameBoard {
    constructor(width, height, tileSize, color) {
        this.width = width
        this.height = height
        this.tileSize = tileSize
        this.color = color
    }
    draw() {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, this.width, this.height)

        const gridOffset = 0
        ctx.strokeStyle = text
        ctx.lineWidth = 1
        for (let x = this.tileSize; x <= this.width-this.tileSize; x+=this.tileSize) {
            ctx.beginPath()
            ctx.moveTo(x, gridOffset)
            ctx.lineTo(x, this.height-gridOffset)
            ctx.stroke()
        }
        for (let y = this.tileSize; y <= this.height-this.tileSize; y+=this.tileSize) {
            ctx.beginPath()
            ctx.moveTo(gridOffset, y)
            ctx.lineTo(this.width-gridOffset, y)
            ctx.stroke()
        }
    }
}