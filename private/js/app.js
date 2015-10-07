// Foundation
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Foundation JavaScript
// Documentation can be found at : http://foundation.zurb.com/docs

$(document).foundation({
    abide : {
        timeout : 100
    }
});



// jQuery
// - - - - - - - - - - - - - - - - - - - - - - - - -

// On lance le document ready de jQuery
// Puis on intègre les fonctions des différents fichiers importés précedemment

$(function() {


	// Carousel
	// - - - - - - - - - - - -
	// Doc : https://github.com/kenwheeler/slick
	Foundation.utils.S('#carousel').slick();


	// Navigation
	// - - - - - - - - - - - -
	//mainNavigation();


	// Grid
	// - - - - - - - - - - - -
	grid();

});