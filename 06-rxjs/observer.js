class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(value) {
        this.observers.forEach(observer => observer.update(value));
    }
}

const obs1 = {
    update: (value) => console.log(`Observer 1: ${value}`)
}

const obs2 = {
    update: (value) => console.log(`Observer 2: ${value}`)
}

const subject = new Subject();
subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify('Hello World!');
subject.unsubscribe(obs2);
subject.notify('otra cosa!');
