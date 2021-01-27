"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.querySelector('button');
var add = function (a, b) {
    var resulte = a * b;
    return resulte;
};
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
console.log('ime');
