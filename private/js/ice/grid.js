
// Variables
// - - - - - - - - - - - - - - - - - - - - - - - - -

function grid() {

    var buttonVerticalGrid = Foundation.utils.S('#button-show-grid'),
        gridVertical = Foundation.utils.S('#grid');

    buttonVerticalGrid.click(function() {

        gridVertical.toggleClass(hideClass);

    });
};