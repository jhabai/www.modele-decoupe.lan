// Navigation
// - - - - - - - - - - - - - - - - - - - - - - - - -

function mainNavigation() {

    // Principale
    // - - - - - - - - - - - -

    // Fermeture du sous-menu si on clic à l'exterieur
    // 1. Si le clic n'est pas sur la navigation
    // 2. Alors on cache le sous-menu

    Foundation.utils.S(document.body).click(function(e) {

        if (!Foundation.utils.S(e.target).is(navigation) && !$.contains(navigation[0], e.target)) { // 1

            navigation.find('.submenu').slideUp(); // 2

        }

    });

}