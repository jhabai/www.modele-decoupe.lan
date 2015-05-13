// Navigation
// - - - - - - - - - - - - - - - - - - - - - - - - -

function showSubMenu($nav) {

    $nav.on('click', function(event){
        
        var element = Foundation.utils.S(this),
            ul      = element.next('ul'),
            count   = ul.length;

        Foundation.utils.S('.submenu').slideUp('fast');
        
        // On detect si un sous-menu est ouvert
        // Si il l'est et qu'un autre onglet est actif, alors on le ferme

        if (count > 0 && !ul.is(':visible')) {

            ul.slideDown();
            event.preventDefault();

        } else {

            ul.slideUp('fast');

        }
        
        // On detect si le label possède la classe 'active'

        if (Foundation.utils.S(this).hasClass('active')) {
            Foundation.utils.S(this).removeClass('active'); 
        }

        else {
            $nav.find('.active').removeClass('active');
            Foundation.utils.S(this).addClass('active');
        }

    });

};




// Navigation
// - - - - - - - - - - - - - - - - - - - - - - - - -

function navigation() {

    var navigation = Foundation.utils.S('#l-navigation'),
        navigationMobile = Foundation.utils.S('#l-navigation-mobile'),
        navigationMobileLabel = Foundation.utils.S('#l-navigation-mobile > li > label');


    // Mobile
    // - - - - - - - - - - - -
    showSubMenu(navigationMobileLabel);



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
    
};