// Function
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Déplacer un élément
// - - - - - - - - - - - -

// Déplacer un élément ($el) dans un bloc ($elMoving)
// * Ex. :

// minwidth(1025, function(){
//     movingElement(elements, sidebar);
// });

function movingElement($el, $elMoving) {

    for (var i = 0; i < $el.length; i++) {
        $elMoving[i].appendChild($el[i]);
    }

}



// hasClass, addClass, removeClass
// - - - - - - - - - - - -

function hasClass(ele,cls) {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
}