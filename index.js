
let color1 = document.querySelector('.color1');

let color2 = document.querySelector('.color2');

let body = document.body;

let showGradient = document.querySelector('.show-gradient-color');

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    showGradient.textContent = body.style.background;
}