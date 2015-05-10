
// Function
// - - - - - - - - - - - - - - - - - - - - - - - - -

// Format du numéro
// - - - - - - - - - - - -

// /!\ type text
// Fonction qui change le format de sortie

function number_format_text(id) {
	var value  = id.text();
	var result = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    id.text(result);
}

// /!\ type input
// Changement du format sur une valeur

function number_format_value(id) {
	var value  = id.val();
	var result = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    id.val(result);
}