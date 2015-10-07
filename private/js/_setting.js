
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

var header = document.getElementById('header-sticky'),
    navigation = document.getElementById('l-navigation'),
    navigationLabel = document.getElementById('l-navigation > li > label'),
    subMenu = document.getElementById('l-submenu'),
    navigationMobile = document.getElementById('l-navigation-mobile'),
    navigationMobileLabel = document.getElementById('l-navigation-mobile > li > label'),
    content = document.getElementById('l-content'),
    container = document.getElementById('l-container'),
    footer = document.getElementById('l-footer'),
    offCanvasWrap = document.getElementById('off-canvas-wrap');



// State
// - - - - - - - - - - - -

var hideClass = 'is-hidden',
    activeClass = 'is-active';



// Navigateur
// - - - - - - - - - - - -

var isChrome = navigator.userAgent.indexOf('Chrome') > -1,
    isExplorer = navigator.userAgent.indexOf('MSIE') > -1,
    isFirefox = navigator.userAgent.indexOf('Firefox') > -1,
    isSafari = /^((?!chrome).)*safari/i.test(navigator.userAgent);