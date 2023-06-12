# RxJS

La programación síncrona es relativamente directa, cada línea se ejecuta después de la línea previa.

La programación asíncrona -> incrementa la complejidad de la programación.

Erik Meijer -> Reactive Extensions (Rx) -> Microsoft -> Rx.NET

¿Que es la programación reactiva?

```javascript
let a1 = 2;
let b1 = 4;
let c1 = a1 + b1; // 6
```

```javascript
a1 = 50
b1 = 50
console.log(c1) // 6
```

En programación imperativa necesitaría ejecutar de nuevo `c1 = a1+b1` para obtener el nuevo valor.

- Generador de eventos que hace push sobre los suscriptores.
- El objetivo sería que c1 reacciionase al cambio de a1 y b1.

# Observer Pattern

Observador rxjs -> suscriptor

Observable -> subject
    
```javascript
// Observador
{
    next: (value) => console.log(value), // cada vez que recibe un evento
    error: (error) => console.log(error), // cuando hay un error
    complete: () => console.log('complete') // cuando se completan todos los eventos
}
```

```javascript

import { of, map, take} from 'rxjs';


of (5,4,3,2,1).pipe(
  map ((evt) => evt+'...')
).pipe(
  take(2)
)

.subscribe(
  {
    next: (v)=>console.log(v),
    error: console.error,
    complete: ()=>console.log("despegando")
  }
)
```
