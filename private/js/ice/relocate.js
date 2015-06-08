
// Relocate
// - - - - - - - - - - - - - - - - - - - - - - - - -

// * Relocate permet de déplacer des éléments au resize en JavaScript
// * Fonctionnement : relocate(width, elements, destinationElement);
// * Documentation : https://github.com/edenspiekermann/minwidth-relocate
// * Ex. :

// var elements = document.getElementById("elements"),
//     sidebar  = document.getElementById("destinationElement");

// relocate(480, elements, destinationElement);


// Déplacer un élément
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Déplacer un élément ($el) dans un bloc ($elMoving)
// * Ex. :

// minwidth(1025, function(){
//     movingElement(elements, sidebar);
// });

function movingElement($el, $elMoving) {

    for (var i = 0; i < $el.length; i++) {
        $elMoving[i].appendChild($el[i]);
    };

};