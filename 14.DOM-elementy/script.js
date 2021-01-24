//Zadanie 1
// var more_divs = document.getElementsByClassName('more-divs');
// //console.log(more_divs);
// function more_div(more_divs) {
//     let tab = [];
//     for (var divtag of more_divs) {
//         tab += [divtag.tagName];
//     }
//     console.log(tab);

// }

let a = document.getElementsByClassName('more-divs');

function f(elems) {
    let tab = []
    for (let i = 0; i < elems.length; i++) {
        tab.push(elems[i].tagName);

    }
    return tab

}

console.log(f(a))

// Zadanie 2
var shortList = document.getElementsByClassName("short-list")[0];

function showData(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}

showData(shortList);

// Zadanie 3
const numberData = document.getElementById('datasetCheck');

const variable = (takeNumbers) => {
    console.log(takeNumbers.dataset);
    const numberOne = parseInt(takeNumbers.dataset.numberone)
    const numberTwo = parseInt(takeNumbers.dataset.numbertwo)
    const numberThree = parseInt(takeNumbers.dataset.numberThree)
    let add = numberOne + numberTwo + numberThree
    let substract = numberOne - numberTwo - numberThree;

    return [add, substract];
}

console.log(variable(numberData));

// Zadanie 4
document.getElementById("spanText").innerHTML = "Js";

// Zadanie 5
document.getElementById("spanText").className = "nowa_klasa";

// Zadanie 6
var classes = document.getElementById("classes");

function manageClasses(classes) {
    classes.classList.forEach(e => console.log(e));
    var divClass = "";
    classes.classList.forEach(e => divClass = divClass + (divClass != "" ? ' + ' : '') + e);
    console.log(divClass);
    classes.classList.remove(...classes.classList);
    console.log("Usunięto wszystkie klasy");
}

manageClasses(classes);

// Zadanie 7

const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach(element => {

        if (!element.getAttribute("data-text")) {
            element.dataset.text = "text";
        }

    })

}

const result = addAttributes(list);

// Zadanie 8
let el = document.getElementById("myDiv");
let obj = {
    newClass: 'string_z_parametru'
}
let sting = "mynewclass";

const fun1 = (obj, string) => {
    obj['newClass'] = string;
    console.log(obj)
}

fun1(obj, sting);

// console.log(obj)
const fun2 = (el, one) => {
    el.classList.add(one.newClass);
}

fun2(el, obj);
console.log()

// Zadanie 9
const div = document.getElementById('numbers');

const addClass = () => {
    let params = Math.floor(Math.random() * 10);

    if (params % 2 == 0) div.className = "even";
    else div.className = "odd";
};

addClass();