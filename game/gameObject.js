class GameObject{
    constructor(x, y, sprite) {
        this.x = x
        this.y = y
        this.pixelPosX = x * tileSize
        this.pixelPosY = y * tileSize
        this.sprite = sprite
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
        ctx.drawImage(this.sprite, this.pixelPosX + 1, this.pixelPosY + 1)
    }
}