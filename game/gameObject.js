class GameObject{
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }
    move(vx, vy) {
        this.x += vx * tileSize
        this.y += vy * tileSize
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, tileSize, tileSize)
    }
}