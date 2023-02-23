const display = document.getElementById('input');
const btnanadir = document.getElementById('btnAnadir');
const btnborrar = document.getElementById('btnBorrar');
const lista = document.getElementById('resultado');
const listaOrdenada = document.getElementById('resultado1');


let arrayNumeros = [];
let i = 0;

btnanadir.addEventListener('click', mostrar);
btnborrar.addEventListener('click', borrar);

let texto = document.createElement('DIV');
let texto2 = document.createElement('DIV');
lista.appendChild(texto);
listaOrdenada.appendChild(texto2);

function mostrar() {

    let valor = display.value;
    if (valor != '') {
        texto.innerHTML += `<li id="numerosIntroducidos">${valor}</li>`;
        arrayNumeros[i] = valor;
    }

    const ArrayOrdenada = arrayNumeros.sort((a, b) => b - a);

    texto2.innerHTML =
        `<h3>Tu lista de numeros ordenada descendiente:</h3>`;
    ArrayOrdenada.forEach(elemento => {
        texto2.innerHTML +=
            ` <li id="numerosIntroducidos">${elemento}</li>`;
    })
    i++;
}

function borrar() {

    //aqui seleccionar las dos listas a borrar 
    
    texto2.innerHTML = ``;
    texto.innerHTML = ``;
    ArrayOrdenada = [];
    arrayNumeros = [];
    i = 0;
}