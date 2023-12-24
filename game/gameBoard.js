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