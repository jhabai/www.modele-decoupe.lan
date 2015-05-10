// Foundation
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Foundation JavaScript
// Documentation can be found at : http://foundation.zurb.com/docs

$(document).foundation({
	equalizer : {
		// Specify if Equalizer should make elements equal height once they become stacked.
		equalize_on_stack: true
	}
});



// jQuery
// - - - - - - - - - - - - - - - - - - - - - - - - -

// On lance le document ready de jQuery
// Puis on intègre les fonctions des différents fichiers importés précedemment

$(function() {

	// Colorbox
	// - - - - - - - - - - - -
	// Doc : http://www.jacklmoore.com/colorbox/
	colorbox_init();


	// Hammer
	// - - - - - - - - - - - -
	// Doc : http://hammerjs.github.io/getting-started/
	hammer_swip();


	// Carousel
	// - - - - - - - - - - - -
	// Doc : https://github.com/kenwheeler/slick
	$('#carousel').slick();


	// Navigation
	// - - - - - - - - - - - -
	navigation();


	// Grid
	// - - - - - - - - - - - -
	grid();

});