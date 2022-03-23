var CAR_TYPE;
(function (CAR_TYPE) {
    CAR_TYPE["SEDAN"] = "sedan";
    CAR_TYPE["COMBI"] = "combi";
    CAR_TYPE["HATCHBACK"] = "hatchback";
})(CAR_TYPE || (CAR_TYPE = {}));
var Car = /** @class */ (function () {
    function Car() {
        this.type = CAR_TYPE.SEDAN;
    }
    Car.prototype.setType = function (type) {
        this.type = type;
    };
    Car.prototype.getType = function () {
        return this.type;
    };
    return Car;
}());
var car = new Car();
console.log(car.getType());
