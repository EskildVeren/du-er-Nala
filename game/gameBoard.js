class GameBoard {
    constructor(color, player) {
        this.color = color
        this.entities = [player]
        this.citrusEntities = []
        this.player = player
    }
    draw() {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)

        const gridOffset = 2
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
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(1, 1)
        ctx.lineTo(1, canvasHeight-1)
        ctx.lineTo(canvasWidth-1, canvasHeight-1)
        ctx.lineTo(canvasWidth-1, 1)
        ctx.lineTo(1,1)
        ctx.stroke()
    }
    playerHit() {
        let playerHit = false
        this.citrusEntities.forEach(citrus => {
            if ((citrus.x == this.player.x) && (citrus.y == this.player.y)) { 
                playerHit = true
            }
        });

        return playerHit
    }

}