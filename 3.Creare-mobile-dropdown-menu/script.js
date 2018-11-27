//Creare un dropdown menu per schermi piccoli


//inserire il tag select all'interno del nav
var $select = $("<select></select>");
$("nav").append($select);

//per tutti gli elemnti del menu di navigazione
$("nav a").each(function() {
	//creare un tag option
	var $option = $("<option></option>");
	//inserire i tag option all'interno del tag select
	$select.append($option);
	//inserire il testo all'interno dei tag option
	$option.text($(this).text());
	//inserire come valore dei tag option, l'href del link nav
	$option.val($(this).attr("href"));
});

//indirizzare l'utente alla sezione una volta selezionato il link
$select.change(function() {
	window.location = $select.val();
});

//via css
//per piccoli schermi, nascondere il nav e mostrare il menu dropdown + il pulsante

//nascondere il menu dropdown e il pulsante per grado schermi	