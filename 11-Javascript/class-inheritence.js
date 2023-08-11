class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.carname = brand;
        this.carmodel = model;
    }
    show() {
        return this.present() + ', it is a ' + this.carmodel;
    }
}

const secondCar = new Car('Ford');
console.log(secondCar.present());

const myCar = new Model('Ford', 'Mustang');
console.log(myCar.show());

debugger;