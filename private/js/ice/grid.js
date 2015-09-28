// Variables
// - - - - - - - - - - - - - - - - - - - - - - - - -

function grid() {

    var buttonVerticalGrid = Foundation.utils.S('#button-show-grid'),
        gridVertical = Foundation.utils.S('#grid');

    buttonVerticalGrid.click(function() {

        gridVertical.toggleClass(hideClass);

    });
    
    $(window).bind('keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
            case 'h':
                event.preventDefault();
                buttonVerticalGrid.click();
                break;
            }
        }
    });
}