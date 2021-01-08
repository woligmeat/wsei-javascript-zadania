// Zadanie 1
var el = document.querySelectorAll(".list");
console.log(el);


// Zadanie 2
function elTag(tagName) {
    console.log(document.getElementsByTagName(tagName));
}
elTag('list');

// Zadanie 3
var elId = document.getElementById('list');
console.log(elId);

// Zadanie 4 
const showdown = (lis, uls, spans, sid, sids) => {
    const allLis = document.querySelectorAll(lis);
    const allUls = document.querySelectorAll(uls);
    const allSpans = document.querySelectorAll(spans);

    const spanInDiv = document.querySelectorAll(sid);
    const spanInDivWID = document.querySelectorAll(sids);

    allLis.forEach(al => { console.log(al) });
    allUls.forEach(au => { console.log(au) });
    allSpans.forEach(as => { console.log(as) });

    spanInDiv.forEach(sid => { console.log(sid) });
    spanInDivWID.forEach(sidwid => { console.log(sidwid) });
};
showdown("li", "ul", "span", "div.list span", "div#spans span");