
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