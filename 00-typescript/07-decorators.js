// const VelocidadMaxima = <T extends{new (...args: any[]):{} }> (constructor: T) => {
//        return class extends constructor {
//         velocidadMaxima: number;
//         constructor(...args: any[]) {
//             super(...args)
//             this.velocidadMaxima = 1000
//         }
//     }
// }
// const VelocidadMaxima = (velocidad: number) => {
//   return <T extends { new (...args: any[]): {} }>(constructor: typeof Vehiculo) => {
//     return class extends constructor {
//       velocidadMaxima: number
//       run: () => void
//       constructor(...args: any[]) {
//         super()
//         this.marca = ''
//         this.velocidadMaxima = velocidad
//         this.run = () => {
//           console.log('Run')
//         }
//       }
//     }
//   }
// }
// @VelocidadMaxima(40)
// class Vehiculo {
//   marca: string
//   constructor() {
//     this.marca = ''
//   }
// }
// @VelocidadMaxima(100)
// class Taxi extends Vehiculo {
//   constructor() {
//     super()
//   }
// }
// @VelocidadMaxima(200)
// class PErsona {
//   constructor() {}
// }
// const vehiculo = new Vehiculo()
// console.log((vehiculo as any).velocidadMaxima); // 40
// (vehiculo as any).run()
