var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Method decorator
const Log = (target, methodName, descriptor) => {
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const newMethod = (...args) => {
                console.log("hemos pasado por aqui");
                const res = originalMethod.apply(this, args);
                return res + 1;
            };
            return newMethod;
        },
    };
    return newDescriptor;
};
class Vehiculo {
    constructor() {
        this.marca = '';
    }
    run() {
        console.log('Run');
        return 1;
    }
}
__decorate([
    Log
], Vehiculo.prototype, "run", null);
const vehiculo = new Vehiculo();
console.log(vehiculo.run());
