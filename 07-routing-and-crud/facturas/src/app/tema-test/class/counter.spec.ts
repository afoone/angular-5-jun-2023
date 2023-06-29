import { Counter } from './counter';

describe('pruebas', () => {
  it('pruebas', () => {
    // comprobamos si es truthy (esto es, cualquier cosa menos null, undefined, false, 0, NaN, o una cadena vacía)
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect('hola').toBeTruthy();
    expect({}).toBeTruthy();

    // True
    expect(true).toBeTrue();
    // expect(1).toBeTrue();
    expect(3 > 2).toBeTrue();

    // Falsy
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();

    // False
    expect(false).toBeFalse();
    // expect(0).toBeFalse();
    expect(3 < 2).toBeFalse();

    // Igualdad
    expect(1).toEqual(1);
    expect('hola').toEqual('hola');
    const a = { nombre: 'Pepe' };
    const b = { nombre: 'Pepe' };
    expect(a).toEqual(b);

    // Desigualdad
    expect(1).not.toEqual(2);
    expect('hola').not.toEqual('adios');

    // Nulos
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(null).toBeDefined();

    // Excepciones
    const funcionQueLanzaExcepcion = () => {
      throw new Error('Error');
    };
    expect(funcionQueLanzaExcepcion).toThrow();
    expect(funcionQueLanzaExcepcion).toThrowError('Error');

    // Arrays
    const array = [1, 2, 3];
    expect(array).toContain(1);
    expect(array).not.toContain(4);
    expect(array.length).toBe(3);
    expect(array.length).toBeGreaterThan(2);

    // Llámadas a funciones
    // const funcion = () => {
    //   return 'Hola';
    // }
    // expect(funcion).toHaveBeenCalled();
  });
});

describe('Counter', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = new Counter();
  });

  it('should create an instance', () => {
    expect(counter).toBeDefined();
  });

  it('should have a default value of 0', () => {
    expect(counter.value).toBe(0);
  });

  it('should increment the value by 1', () => {
    counter.value = 6;
    counter.increment();
    expect(counter.value).toBe(7);
  });

  it('should decrement the value by 1', () => {
    counter.value = 3;
    counter.decrement();
    expect(counter.value).toBe(2);
  });
});
