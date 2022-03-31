let llanta1 = document.querySelector('#llanta-id');
let aleron1 = document.querySelector('#aleron-id');
let Lip = document.querySelector('#Lip-id');

let aleronDibujo = document.querySelector('#Aleron');
let lipDibujo = document.querySelector('#lip');
let llantasDibujo = document.querySelector('#llantas');


llantasDibujo.addEventListener('click', () => {
    llanta1.innerHTML = `<p style="color: greenyellow;">Llantas</p>`
});
aleronDibujo.addEventListener('click', () => {
    aleron1.innerHTML = `<p style="color: greenyellow;">Aleron</p>`
});
lipDibujo.addEventListener('click', () => {
    Lip.innerHTML = `<p style="color: greenyellow;">Lip</p>`
});
