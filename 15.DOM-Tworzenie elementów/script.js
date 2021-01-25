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