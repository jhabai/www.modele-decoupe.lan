
// Colorbox
// - - - - - - - - - - - - - - - - - - - - - - - - -

function colorbox_init() {

	// Image
	$(".cb-image").colorbox({
		rel: 'group1'
	});

	// Iframe
	$('.cb-iframe').colorbox({
		width: '80%',
		height: '80%',
		iframe: true,
		fixed: true,
		title: false,
	});

};