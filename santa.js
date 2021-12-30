class Santa {
    _x;
    _y;
    _speed
    _width;
    _height;
    _src;
    constructor(x, y, width, height, src, speed) {
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
        this._src = src;
        this._speed = speed
    }
    set x (x){
        this._x = x
    }
    get x(){
        return this._x
    }
    set y (y){
        this._y = y
    }
    get y(){
        return this._y
    }
    set speed(speed){
        this._speed = speed
    }
    get speed(){
        return this._speed
    }
    set width(width){
        this._width = width
    }
    get width(){
        return this._width
    }
    set height(height){
        this._height = height
    }
    get height(){
        return this._height
    }
    set src (src){
        this._src = src
    }
    get src (){
        return this._src
    }
    drawSanta(ctx){
        let img = new Image()
        img.src = this._src

            ctx.drawImage(img, this._x, this._y, this._width, this._height);

    }
    moveLeft(){
        this._x = this._x - this._speed
    }
    moveRight(){
        this._x = this._x +this._speed
    }

}