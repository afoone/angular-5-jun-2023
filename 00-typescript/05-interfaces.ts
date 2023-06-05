interface Voz {
    hablar(): string;
}

class Perro implements Voz {
    hablar(): string {
        return 'Guau';
    }
}

class Gato implements Voz {
    hablar(): string {
        return 'Miau';
    }
}

interface Gps {
    lat: number;
    lng: number;
    high?: number;
}

interface GpsWithGo extends Gps {
    go: (lat: number, lng: number) => void;
}

let valencia: Gps = {
    lat: 10.123,
    lng: 20.123
}

let valencia342: Partial<Gps> = {
}