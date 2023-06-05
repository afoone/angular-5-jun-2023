class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this._edad = edad;
    }
    getEdad() {
        return this._edad;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
}
const persona = new Persona('Victor', 'Robles', 31);
console.log(persona);
persona.edad = 32;
console.log(persona.edad);
