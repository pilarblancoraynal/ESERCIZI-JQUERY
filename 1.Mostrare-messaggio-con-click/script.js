//PIANIFICAZIONE//
//Impedire all'utente di visualizzare il messaggio sulla pagina all'inizio.
//Soluzione:Nascondere il messaggio, far comparire un pulsante e quando l'utente clicca, far apparire il messaggio e far scomparire il pulsante.

//PIANIFICAZIONE//
//1.Nascondere il messaggio.
$(".spoiler h2").hide();
//2.Aggiungere il pulsante.
$(".spoiler").append("<button>Scopri cosa hai vinto</button>");
//3.Quando clicchiamo:
$("button").click(function() {
	//3.1-Mostrare il messaggio che si trova prima del pulsante che clicco
	$(this).prev().show();
	//3.2-Eliminare il pulsante
	$(this).remove();
	  //occhio: con la var 'this' perchè se utilizzasi 'button' la funzione remove sarebbe applicata a tutti i bottoni della pagina, se voglio che sia applicato solo a quel bottone, devo utilizzare 'this'(attenzione: molto importante)
});

//PERFORM: Inseriremmo il codice in cada punto.
//PERFECT: Sistemeremmo il codice inserito in cada punto. 
// suponiamo che per "perfezionare voglio agg.un'altro pulsante o funzione, quindi:/
///1. su html vado e aggiungo un'altro div con un'altra class= "spoiler"...ma come risolvo la cosa dei 2 pulsanti...occorre utilizzare un "traversing method" es. .prev()