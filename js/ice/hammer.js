
// HAMMER
// - - - - - - - - - - - - - - - - - - - - - - - - -

function hammer_swip() {

	$("#page").hammer().on("swipeleft", function(ev) { 

		$(this).addClass('move-right');

	}).on("swiperight", function(ev) {

		$(this).removeClass('move-right');

	});

};