class Player extends GameObject {
    constructor(x, y, sprite) {
        super(x, y, sprite)
        this.pixelPosX = x * tileSize
        this.pixelPosY = y * tileSize
    }
    draw() {
        ctx.drawImage(this.sprite, this.pixelPosX + 1, this.pixelPosY + 1)
    }
}