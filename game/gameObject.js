class GameObject{
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.pixelPosX = x * tileSize
        this.pixelPosY = y * tileSize
        this.color = color
        //adjectives
        this.push = false
        this.stop = true
    }
    move(vx, vy) {
        this.x += vx
        this.y += vy
        this.pixelPosX = this.x * tileSize
        this.pixelPosY = this.y * tileSize
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.pixelPosX+1, this.pixelPosY+1, tileSize-2, tileSize-2)
    }
}