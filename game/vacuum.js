class Vacuum extends GameObject {
    constructor (x, y, color) {
        this.x = x;
        this.y = y;
        this.pixelPosX = x * tileSize
        this.pixelPosY = y * tileSize
        this.color = color;
    }
    catIsHit (cat) {
        if ((cat.x == this.x) && (cat.y == this.y)) {
            return true
        }
        else {
            return false
        }
    }
}