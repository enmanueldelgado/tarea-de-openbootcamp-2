"use strict";

const fechaDehoy = new Date();
console.log(fechaDehoy);

const fechaDecumpleaños = new Date("August 25, 2001 15:25:30");
console.log(fechaDecumpleaños);

console.log(fechaDehoy.getTime() > fechaDecumpleaños.getTime());

let miCumple = fechaDecumpleaños;
console.log(miCumple);

let mesdeMicumple = fechaDecumpleaños.getMonth();
console.log(mesdeMicumple);

let añodeMicumple = fechaDecumpleaños.getFullYear();
console.log(añodeMicumple);
