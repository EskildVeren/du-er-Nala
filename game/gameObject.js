class GameObject{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    move(vx, vy) {
        this.x += vx
        this.y += vy
    }
    draw() {
        ctx.fillStyle = primary
        ctx.fillRect(this.x, this.y, tileSize)
    }
}