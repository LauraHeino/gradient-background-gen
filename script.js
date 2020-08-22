const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randBtn = document.getElementById('random');
const range = document.getElementById('deg');
const gradDeg = range.value;


function pickColors() {
    body.style.background = `linear-gradient(${range.value}deg, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ';';
}

color1.addEventListener('input', pickColors); 

color2.addEventListener('input', pickColors);

range.addEventListener('input', function(event) {
    event.preventDefault();
    const gradDeg = range.value;
    body.style.background = `linear-gradient(${range.value}deg, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ';';

})

randBtn.addEventListener('click', function() {
    body.style.background = `linear-gradient(${randomize2()}deg, ${randomize1()}, ${randomize1()})`;
    css.textContent = body.style.background + ';';
    
})
    

function randomize1() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}

function randomize2() {
    let deg = Math.floor(Math.random() * 260) - 90;
    return deg;
}


