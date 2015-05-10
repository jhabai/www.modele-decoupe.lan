
// Variables
// - - - - - - - - - - - - - - - - - - - - - - - - -

function grid() {

    var buttonVerticalGrid = Foundation.utils.S('#show-vertical-grid'),
        buttonHorizontalGrid = Foundation.utils.S('#show-horizontal-grid'),
        buttonHorizontalGrid8 = Foundation.utils.S('#show-horizontal-grid-8'),
        buttonHorizontalGrid16 = Foundation.utils.S('#show-horizontal-grid-16'),
        buttonHorizontalGrid32 = Foundation.utils.S('#show-horizontal-grid-32'),
        gridVertical = Foundation.utils.S('#grid-vertical'),
        gridHorizontal8 = Foundation.utils.S('#grid-horizontal-8'),
        gridHorizontal16 = Foundation.utils.S('#grid-horizontal-16'),
        gridHorizontal32 = Foundation.utils.S('#grid-horizontal-32'),
        content = Foundation.utils.S('#l-content');

    buttonVerticalGrid.click(function() {

        gridVertical.toggleClass('hide');

    });

    buttonHorizontalGrid8.click(function() {

        gridHorizontal8.toggleClass('hide');

    });

    buttonHorizontalGrid16.click(function() {

        gridHorizontal16.toggleClass('hide');

    });

    buttonHorizontalGrid32.click(function() {

        gridHorizontal32.toggleClass('hide');

    });

}