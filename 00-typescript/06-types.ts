type Gps2 = {
    lat: number;
    lng: number;
    high?: number;
}

type GpsWithGo2 = Gps2 & {
    go: (lat: number, lng: number) => void;
}

let valencia2: Gps2 = {
    lat: 10.123,
    lng: 20.123
}

// let posicionDesconocida: Gps2 = {} as Gps2;
// todas las propiedades de Gps2 son opcionales
let posicionDesconocida: Partial<Gps2> = {};

// todas las propiedades de Gps2 son obligatorias
let posicionConocida: Required<Gps2> = {
    lat: 10.123,
    lng: 20.123,
    high: 10
}

let Clavevalor: Record<string, number|string> = {
    "clave1": 1,
    "clave2": 2,
    "clave3": "3"
}

