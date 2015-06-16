// Navigation
// - - - - - - - - - - - - - - - - - - - - - - - - -

function showSubMenu($nav) {

    $nav.on('click', function(event){
        
        var element = Foundation.utils.S(this),
            ul      = element.next('ul'),
            count   = ul.length;

        // On ouvre notre sous-menu
        Foundation.utils.S('.submenu').slideUp('fast');

        // Si un autre sous-menu est ouvert
        if (count > 0 && !ul.is(':visible')) {

            // Alors on le ferme
            ul.slideDown('fast');
            event.preventDefault();
        }

        else {
            ul.slideUp('fast');
        }

        // On detect si le label possède la classe 'active'
        if (Foundation.utils.S(this).hasClass(activeClass)) {
            Foundation.utils.S(this).removeClass(activeClass);
        }

        else {
            $nav.find(activeClass).removeClass(activeClass);
            Foundation.utils.S(this).addClass(activeClass);
        }

    });

};




// Navigation
// - - - - - - - - - - - - - - - - - - - - - - - - -

function mainNavigation() {


    // Mobile
    // - - - - - - - - - - - -
//    showSubMenu(navigationMobileLabel);



    // Principale
    // - - - - - - - - - - - -

    // Fermeture du sous-menu si on clic à l'exterieur
    // 1. Si le clic n'est pas sur la navigation
    // 2. Alors on cache le sous-menu

    Foundation.utils.S(document.body).click(function(e) {

        if (!Foundation.utils.S(e.target).is(navigation) && !$.contains(navigation[0], e.target)) { // 1

            navigation.find('.submenu').slideUp(); // 2

        };

    });
    
};