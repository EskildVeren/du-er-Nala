class GameObject{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    move(vx, vy) {
        this.x += vx * tileSize
        this.y += vy * tileSize
    }
    draw() {
        ctx.fillStyle = primary
        ctx.fillRect(this.x, this.y, tileSize, tileSize)
    }
}