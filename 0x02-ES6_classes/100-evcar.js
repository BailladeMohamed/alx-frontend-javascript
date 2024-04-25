// tonomobila kadir vroom vroom
import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const newCar = new Car();
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    return newCar;
  }
}

export default EVCar;
