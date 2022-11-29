"use strict";

const datosPersonales = {
  nombre: "Enmanuel",
  apellido: "Delgado",
  edad: 21,
  altura: 1.71,
  eresDesarrollador: true,
};

let edadObj = datosPersonales.edad;
console.log(edadObj);

const datosPersonales2 = datosPersonales;

const misDosamigos = [
  { nombre: "Diego", apellido: "Ochoa", edad: 21 },
  { nombre: "Andrey", apellido: "briceño", edad: 20 },
];

const misDosamigos2 = misDosamigos;

misDosamigos2.sort((a, b) => a.edad + b.edad);
console.log(misDosamigos2);
