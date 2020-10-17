class City {
    size = 8
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    show() {
        push()
        fill("#00ff00")
        stroke("#00ff00")
        strokeWeight(2)
        ellipse(this.x, this.y, this.size, this.size)
        pop()
    }
}