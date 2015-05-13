// Function
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Format du numéro
// - - - - - - - - - - - -

// /!\ type text
// Fonction qui change le format de sortie
function numberFormatText($elem) {
	var value  = id.text(),
        result = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    $elem.text(result);
};


// /!\ type input
// Changement du format sur une valeur
function numberFormatValue($elem) {
	var value  = id.val(),
        result = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    $elem.val(result);
};