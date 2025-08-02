/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("unitInput")

let lengthEl = document.getElementById("length-calc")
let volumeEl = document.getElementById("volume-calc")
let massEl = document.getElementById("mass-calc")

let btnEl = document.getElementById("btn")

btnEl.addEventListener("click", function() {
    lengthEl.innerHTML = `<p>${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters</p>`
    volumeEl.innerHTML = `<p>${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} liters</p>`
    massEl.innerHTML = `<p>${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilos</p>`
});