let liquidodireccion1 = document.querySelector('#liquidodedireccion-id');
let bateria1 = document.querySelector('#bateria-id');
let anticongelante1 = document.querySelector('#anticongelante-id');


let liquidodireccionDibujo = document.querySelector('#liquidodedireccion');
let bateriaDibujo = document.querySelector('#bateria');
let anticongelanteDibujo = document.querySelector('#anticonglante');


liquidodireccionDibujo.addEventListener('click', () => {
    liquidodireccion1.innerHTML = `<p style="color: greenyellow;">Liquido de direccion</p>`
});

bateriaDibujo.addEventListener('click', () => {
    bateria1.innerHTML = `<p style="color: greenyellow;">Bateria</p>`
});

anticongelanteDibujo.addEventListener('click', () => {
    anticongelante1.innerHTML = `<p style="color: greenyellow;">Liquido anticongelante</p>`
});

