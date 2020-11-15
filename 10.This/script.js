//ZADANIE 1
let person = {
    name: "Damian",
    surname: "Pedrycz",
    age: '22',
    country: 'Poland',
    city: 'Kielce',
    changeAge: function(currentAge) {
        let age = currentAge;
        age++;
        this.age = age;
    }
}

let person2 = {
    name: "Weronika",
    surname: "Kozieł",
    age: 20,
    country: 'Poland',
    city: 'Kielce',
    changeAge: function(currentAge) {
        let age = currentAge;
        age++;
        this.age = age;
    }
}

for (i in person) {
    console.log([i] + ': ' + person[i]);
}

for (i in person2) {
    console.log([i] + ': ' + person2[i]);
}

person.changeAge(person.age);
console.log(person.age);

person2.changeAge(person2.age);
console.log(person2.age);




// Zadanie 2
let person = {
    name: "Damian",
    surname: "Pedrycz",
    age: '22',
    country: 'Poland',
    city: 'Kielce',
    changeAge: function(currentAge) {
        let age = currentAge;
        age++;
        this.age = age;
    },
    favDish: ['pizza', 'kebab', 'hamb'],
    writeFavDish: function(curFavDish) {
        for (let i = 0; i < curFavDish.length; i++) {
            console.log('name: ' + curFavDish[i]);
        }
    },
    pushFavDish: function(curFavDish, nameFavDish) {
        curFavDish.push(nameFavDish);
    }
}

person.writeFavDish(person.favDish);
person.pushFavDish(person.favDish, 'Heelo');



let person2 = {
    name: "Weronika",
    surname: "Kozieł",
    age: 20,
    country: 'Poland',
    city: 'Kielce',
    changeAge: function(currentAge) {
        let age = currentAge;
        age++;
        this.age = age;
    },
    favDish: ['pizza', 'kebab', 'hamb'],
    writeFavDish: function(curFavDish) {
        for (let i = 0; i < curFavDish.length; i++) {
            console.log('name: ' + curFavDish[i]);
        }
    },
    pushFavDish: function(curFavDish, nameFavDish) {
        curFavDish.push(nameFavDish);
    }
}

person2.writeFavDish(person2.favDish);
person2.pushFavDish(person2.favDish, 'Heelo');


// Zadanie 3

let calc = {
    a: 0,
    b: 0,
    saveArgs: function(a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function() {
        let sum = this.a + this.b;
        console.log(sum);
    },
    substraction: function() {
        let substraction = this.a - this.b;
        console.log(substraction);
    },
    multiplication: function() {
        let multiplication = this.a * this.b;
        console.log(multiplication);
    },
    division: function() {
        if (this.b == 0) {
            console.log('You cannot divide by 0');
        } else {
            let division = this.a / this.b;
            console.log(division);
        }

    }
}

calc.saveArgs(2, 3);
calc.sum();
calc.substraction();
calc.multiplication();
calc.division();



// Zadanie 4
let stairs = {
    floor: 0,
    goUp: function() {
        let floor = this.floor;
        floor++;
        this.floor = floor;
        // console.log(floor);
    },
    goDown: function() {
        let floor = this.floor;
        floor--;
        this.floor = floor;
    },
    showFloor: function() {
        if (this.floor == 0) {
            console.log('Jesteś na parterze.')
        } else {
            console.log('Jesteś na ' + this.floor + ' piętrze.');
        }

    }
}

stairs.showFloor();
stairs.goUp();
stairs.showFloor();
stairs.goDown();
stairs.goDown();
stairs.goDown();
stairs.showFloor();
