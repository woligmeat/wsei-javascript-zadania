// Zadanie 1
//let root = document.getElementById('root');
let addEl = document.createElement('div');
root.appendChild(addEl);
addEl.innerHTML += "To jest nowy element";


// Zadanie 2
let tabList = ['Morela', 'Brzoskwinia', 'Mango', 'Granat', 'Wiśnia', 'Agrest', 'Gruszka'];
//let root = document.getElementById('root');
let listUl = document.createElement('ul');
listUl.className = 'listUl';
var listLi = 0;
for (let a = 0; a < tabList.length; a++) {
    listLi = document.createElement('li');
    root.appendChild(listUl).appendChild(listLi);
    listLi.innerHTML = tabList[a];
}

// Zadanie 3
//let root = document.getElementById('root');
let listLiClass = document.querySelectorAll('.listUl > li');
window.addEventListener('load', event => {
    for (let a = 0; li = listLiClass[a]; a++) {
        if (a % 2 == 0) {
            li.parentNode.removeChild(li);
        }
    }
});


// Zadanie 4
//let root = document.getElementById('root');
let addBtn = document.createElement('button');
root.appendChild(addBtn).innerHTML = "Usun";
addBtn.className = 'btn';
addBtn.addEventListener('click', event => {
    addBtn.parentNode.removeChild(addBtn);
});


// Zadanie 5
let randomNum = Math.floor(Math.random() * 27);
for (let a = 0; a < randomNum; a++) {
    let randomDiv = document.createElement('Div');
    root.appendChild(randomDiv);
    randomDiv.innerHTML = 'to jest div ' + a;
}

// Zadanie 6
let obj = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

for (i in obj) {
    console.log(`${i} : ${obj[i]}`);
}

for (a in obj.div2) {
    console.log(`${a} : ${obj.div2[a]}`);
}


// Zadanie 7
let list1zad7 = ['Morela', 'Brzoskwinia', 'Mango', 'Granat', 'Wiśnia', 'Agrest', 'Gruszka'];
let list2zad7 = ['3'];

const showElements = () => {
    for (let a = 0; a < list1zad7.length; a++) {
        zad7listLi1 = document.createElement('li');
        root.appendChild(zad7list1).appendChild(zad7listLi1);
        zad7listLi1.innerHTML += list1zad7[a];
    }
    for (let a = 0; a < list2zad7.length; a++) {
        zad7listLi2 = document.createElement('li');
        root.appendChild(zad7list2).appendChild(zad7listLi2);
        zad7listLi2.innerHTML += list2zad7[a];
    }
}


let zad7list1 = document.createElement('ul');
zad7list1.className = 'zad7list1';
var zad7listLi1 = 0;
for (let a = 0; a < list1zad7.length; a++) {
    zad7listLi1 = document.createElement('li');
    root.appendChild(zad7list1).appendChild(zad7listLi1);
    zad7listLi1.innerHTML += list1zad7[a];
}

let addBtn1zad7 = document.createElement('button');
root.appendChild(addBtn1zad7).innerHTML = "Zmien";
let listLizad71 = document.querySelectorAll('.listUl > li');
addBtn1zad7.addEventListener('click', event => {

    zad7list1.removeChild(zad7list1.lastChild);
    //console.log(listLizad71.length);
    showElements();
});

let zad7list2 = document.createElement('ul');
zad7list2.className = 'zad7list2';
var zad7listLi2 = 0;
for (let a = 0; a < list2zad7.length; a++) {
    zad7listLi2 = document.createElement('li');
    root.appendChild(zad7list2).appendChild(zad7listLi2);
    zad7listLi2.innerHTML += list2zad7[a];
}

let addBtn2zad7 = document.createElement('button');
root.appendChild(addBtn2zad7).innerHTML = "Zmien";
//addBtn.className = 'btn';
addBtn2zad7.addEventListener('click', event => {
    //addBtn.parentNode.removeChild(addBtn);
});

// Zadanie 8
let form8 = document.getElementById('form8');
let element8 = document.getElementById("element8");
let text8 = document.getElementById("text8");
let color8 = document.getElementById("color8");
let quantity8 = document.getElementById("quantity8");
let btn8 = document.getElementById("btn8");

btn8.addEventListener('click', e => {

    e.preventDefault();
    // formul8.parentNode.removeChild(formul8);
    element8V = element8.value;
    text8V = text8.value;
    color8V = color8.value;
    quantity8V = quantity8.value;

    for (let a = 0; a < quantity8V; a++) {
        let listLi8 = document.createElement(element8V);
        listLi8.style.color = color8V;
        form8.appendChild(listLi8);
        listLi8.innerHTML = text8V;
    }

});




// Zadanie 9
let form9 = document.getElementById('form9');
let imie9 = document.getElementById("imie9");
let nazwisko9 = document.getElementById("nazwisko9");
let wiek9 = document.getElementById("wiek9");
let ilosc9 = document.getElementById("ilosc9");
let btn9u = document.getElementById("btn9u");
let btn9w = document.getElementById("btn9w");

var as = 0;
btn9w.addEventListener('click', e => {
    e.preventDefault();
    ++as;

    let imie9CLN = imie9.cloneNode(true);
    imie9CLN.setAttribute("id", imie9.getAttribute('id') + as);
    form9.appendChild(imie9CLN);

    let nazwisko9CLN = nazwisko9.cloneNode(true);
    nazwisko9CLN.setAttribute("id", nazwisko9.getAttribute('id') + as);
    form9.appendChild(nazwisko9CLN);

    let wiek9CLN = wiek9.cloneNode(true);
    wiek9CLN.setAttribute("id", wiek9.getAttribute('id') + as);
    form9.appendChild(wiek9CLN);

    let ilosc9CLN = ilosc9.cloneNode(true);
    ilosc9CLN.setAttribute("id", ilosc9.getAttribute('id') + as);
    form9.appendChild(ilosc9CLN);


});