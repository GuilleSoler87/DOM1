console.log(document.title);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const title1 = document.getElementById("gen-1");
title1.innerText = "Generasión 1 Pokimon"

// Cambia el color de fondo de la primera generación de Pokimon.

let generat1 = document.getElementsByClassName("infocard-list")[0]
for (const fondoam of generat1.children) {
    fondoam.style.backgroundColor = "#f9eac3"
}

// Imprime por consola la URL de la página.

val = document.URL;
console.log(val)

// Imprime por consola el dominio de la página.

val1 = document.domain;
console.log(val1)

// Imprime todos los nodos de imagen.

const allimages = document.getElementsByTagName("img")
console.log(allimages)

// // Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


for (const cara of allimages) {
    cara.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}


// PREMIUM
// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let voladores = document.getElementsByClassName("itype flying")

for (const fly of voladores) {
    fly.parentNode.parentNode.style.backgroundColor = "#D4AF37"
}