const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randBtn = document.getElementById('random');

function pickColors() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ';';
}

color1.addEventListener('input', pickColors); 

color2.addEventListener('input', pickColors);

randBtn.addEventListener('click', function() {
    body.style.background = `linear-gradient(to right, ${randomize1()}, ${randomize1()})`;
    css.textContent = body.style.background + ';';

    
})
    

function randomize1() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
    
}


