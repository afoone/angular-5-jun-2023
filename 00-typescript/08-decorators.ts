// Method decorator
const Log = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value

  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const newMethod = (...args: any[]) => {
        console.log("hemos pasado por aqui")
        const res = originalMethod.apply(this, args)
        return res+1
      }
      return newMethod
    },
  }

  return newDescriptor
}

class Vehiculo {
  marca: string

  constructor() {
    this.marca = ''
  }

  @Log
  run():number {
    console.log('Run')
    return 1
  }
}

const vehiculo = new Vehiculo()
console.log(vehiculo.run())
