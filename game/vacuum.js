class Vacuum extends GameObject {
    constructor (x, y, color, vx, vy) {
        super(x, y, color)
        this.vx = vx
        this.vy = vy
    }
    catIsHit (cat) {
        if ((cat.x == this.x) && (cat.y == this.y)) {
            return true
        }
        else {
            return false
        }
    }

    move() {
        this.x += this.vx
        this.y += this.vy
        this.pixelPosX = this.x * tileSize
        this.pixelPosY = this.y * tileSize
    }
}