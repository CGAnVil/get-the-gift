class Player {
    _name;
    _point;
    constructor(name, point) {
        this._name = name;
        this._point = point
    }
    set name(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    set point (point){
        this._point = point
    }
    get point(){
        return this._point
    }

}