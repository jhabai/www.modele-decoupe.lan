
// Variables
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Fichier de configuration
// C'est ici que les variables principales seront stockées

var smallBreackPoints  = 640,
	mediumBreackPoints = 1024;

var smallUp 	= window.matchMedia("(min-width: " + smallBreackPoints + "px)").matches,
	smallOnly   = window.matchMedia("(max-width: " + smallBreackPoints + "px").matches,
	smallMedium = window.matchMedia("(max-width: " + mediumBreackPoints + "px)").matches,
	mediumUp    = window.matchMedia("(min-width: " + smallBreackPoints + "px)").matches,
	mediumOnly  = window.matchMedia("(min-width: " + smallBreackPoints + "px) and (max-width: " + mediumBreackPoints + "px").matches,
	largeUp     = window.matchMedia("(min-width: " + mediumBreackPoints + "px)").matches;


// Variables globales
// - - - - - - - - - - - -

var header = Foundation.utils.S('#l-header'),
    navigation = Foundation.utils.S('#l-navigation'),
    navigationLabel = Foundation.utils.S('#l-navigation > li > label'),
    subMenu = Foundation.utils.S('#l-submenu'),
    navigationMobile = Foundation.utils.S('#l-navigation-mobile'),
    navigationMobileLabel = Foundation.utils.S('#l-navigation-mobile > li > label'),
    content = Foundation.utils.S('#l-content'),
    container = Foundation.utils.S('#l-container'),
    footer = Foundation.utils.S('#l-footer'),
    offCanvasWrap = Foundation.utils.S('#off-canvas-wrap');



// State
// - - - - - - - - - - - -

var hideClass = 'is-hidden',
    activeClass = 'active';