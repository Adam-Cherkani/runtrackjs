const bouton = document.getElementById('button');
const compteur = document.getElementById('compteur');

let nombreClics = 0;

function addOne () {
    nombreClics ++;
    compteur.textContent = nombreClics;
}

bouton.addEventListener('click',addOne);