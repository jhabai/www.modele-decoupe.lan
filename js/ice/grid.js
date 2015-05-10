
// Variables
// - - - - - - - - - - - - - - - - - - - - - - - - -

function grid() {

    var buttonVerticalGrid = Foundation.utils.S('#show-vertical-grid'),
        gridVertical = Foundation.utils.S('#grid-vertical'),
        content = Foundation.utils.S('#l-content');

    buttonVerticalGrid.click(function() {

        gridVertical.toggleClass('hide');

    });
};