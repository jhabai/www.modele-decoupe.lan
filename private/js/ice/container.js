// Container
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Calcul du height du header pour pousser le contenu scrollable (l-container) d'autant

function containerMargin() {

    var headerHeightBloc;

    headerHeightBloc = header.offsetHeight;

    container.style.paddingTop = headerHeightBloc + 'px';

}

// Si on est sur MAC
if (isSafari) {
    
    // On ajoute une classe sur le body
    document.body.className+=' safari';
    
    // On ajoute un setTimeOut
    setTimeout(function() {
        containerMargin();
    }, 500);

} else {

    // Pour le reste, on l'execute tout de suite
    containerMargin();

}

window.addEventListener('resize', function(event){
    
    container.style.removeProperty('padding-top');
    
    containerMargin();
});