"use strict";
// Exercise 1
// Fix the function with TypeScript
// function normalizarTexto(texto) {
//     return texto.trims().toLowercase();
//   }
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// Exercise 2
// Fix the function with TypeScript
// const input = document.querySelector('input');
// const total = localStorage.getItem('total');
// input.value = total;
// calcularGanho(input.value);
// function calcularGanho(value) {
//   const p = document.querySelector('p');
//   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }
// function totalMudou() {
//   const value = Number(input.value);
//   localStorage.setItem('total', value);
//   calcularGanho(value);
// }
// input.addEventListener('keyup', totalMudou);
const input = document.querySelector('input');
const total = localStorage.getItem('total');
const p = document.querySelector('p');
if (input && total) {
    input.value = total;
    calcularGanho(Number(total));
}
function calcularGanho(value) {
    if (p)
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
