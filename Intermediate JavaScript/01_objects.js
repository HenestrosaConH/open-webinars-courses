/*
Three ways of defining objects:
*/
// 1st approach: Declarative objects
var person = {
    name: 'John',
    age: 30,
    greeting: function () {
        console.log("What's up?")
    }
};
person.greeting();

// 2nd approach: Constructed objects
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function () {
        console.log("What's up " + this.name + "?")
    }
}
var person = new Person('John', 30);

// 3rd approach: Anonymous object
var person = new Object({
    name: 'John',
    age: 30,
    greeting: function () {
        console.log("What's up " + this.name + "?")
    }
});

/* Exercise:
    Imaginemos que vamos a desarrollar un juego, y debemos crear un objeto Jugador
    que tenga una propiedad fuerza que inicialmente tenga el valor 1, un método  
    incrementarFuerza que nos permita incrementar en 1 la fuerza del jugador y
    un método consultarFuerza que nos muestre un mensaje con la fuerza del jugador.
*/
var jugador = {
    fuerza: 1,
    incrementarFuerza: function () {
        this.fuerza += 1;
    },
    consultarFuerza: function () {
        console.log("Tu fuerza es de " + this.fuerza);
    }
}

jugador.consultarFuerza();
jugador.incrementarFuerza();
jugador.consultarFuerza();