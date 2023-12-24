class Vacuum extends GameObject {
    constructor (x, y, color) {
        super(x, y, color)
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