class Player extends GameObject {
    constructor(x, y, sprite) {
        super(x, y, sprite)
    }
    move(vx, vy) {
        this.x += vx
        this.y += vy
        this.pixelPosX = this.x * tileSize
        this.pixelPosY = this.y * tileSize
    }
}