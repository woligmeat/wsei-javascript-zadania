// Zadanie 1

const tab = ['1', '2', '3', '4'];

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

// Zadanie 2

var array = ["one", 2, 3, 4, 5, 'six'];
console.log(array[1], array[1]);
console.log(array[array.length - 1]);
console.log(array);
console.log(array.filter((x, i) => i % 2));
console.log(array.filter((x, i) => typeof(x) == "string"));
console.log(array.filter((x, i) => typeof(x) == "number"));


//Zadanie 3
let exampleArray = [1, 3, 7, 66, 462, 754];
let counter = 0;
exampleArray.forEach((elem, i) => {
    conunter += elem;

});
console.log(counter);

let counter1 = 0;
exampleArray.forEach((elem, i) => {
    conunter1 -= elem;

});
console.log(counter);

exampleArray.forEach((elem, i) => {
    conunter += elem;

});
console.log(counter / exampleArray.length);

exampleArray.forEach((elem, i) => {
    if (elem % 2 == 0) {
        console.log(elem);
    }
});

exampleArray.forEach((elem, i) => {
    if (elem % 2 != 0) {
        console.log(elem);
    }
});


var max = 0;
for (let i = 0; i < exampleArray.length; i++) {
    if (max <= exampleArray[i]) {
        max = exampleArray[i];
    }
}
console.log('max: ', max);

var min = exampleArray[0];
for (let i = 0; i < exampleArray.length; i++) {
    if (exampleArray[i] < min) {
        min = exampleArray[i];
    }
}
console.log('min: ', min);

console.log(exampleArray.reverse());



// Zadanie 4
let tab = [1, 2, 3];

let sum = 0;

function tabSumFunction(tab) {
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i]
    }
    console.log(sum);
}

tabSumFunction(tab);

// Zadanie 5;
const func = (arr) => {
    let ave = (arr.reduce((a, b) => a + b / arr.length));
    let new_arr = arr.map((x) => x * ave);
    console.log(new_arr);
}
func([1, 2, 3, 4]);

// Zadanie 6

const func = (arr) => {
    let sum = 0;
    let counter = 0;
    arr.forEach((elem, i) => {
        if (elem % 2 == 0) {
            sum += elem;
            counter++;
        }
    })
    console.log(sum);
    let average = sum / counter;
    console.log(average);
}
func([1, 2, 3, 4]);


// Zadanie 7
// I sposob
const func = (arr) => {
    console.log(arr.sort((a, b) => {
        return a - b;
    }));
}
func([1, 2, 3, 4]);
