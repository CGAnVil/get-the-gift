class Gift {
    _x;
    _y;
    _width;
    _height;
    _speed;
    _src;

    constructor(x, y, width, height, src, speed) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._src = src
    }

    set x(x) {
        this._x = x
    }

    get x() {
        return this._x
    }

    set y(y) {
        this._y = y
    }

    get y() {
        return this._y
    }

    set width(width) {
        this._width = width
    }

    get width() {
        return this._width
    }

    set height(height) {
        this._height = height
    }

    get height() {
        return this._height
    }

    set speed(speed) {
        this._speed = speed
    }

    get speed() {
        return this._speed
    }

    set src(src) {
        this._src = src
    }

    get src() {
        return this._src
    }

    drawGift(ctx) {
        let img = new Image()
        img.src = this._src

        ctx.drawImage(img, this._x, this._y, this._width, this._height)

    }

    moveDown() {
        this._y =this._y + this._speed
    }

}