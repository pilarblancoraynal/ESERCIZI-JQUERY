///PREPARAZIONE///
//Problema:quando clicco su un'imagine vengo rimandato ad un'altra pagina.
//Soulzione: sovraporre l'immagine ad uno sfondo nero - lightbox

//PIANIFICAZIONE///
//1.Catturare il click dell'utente sull'immagine
$("#gallery a").click(function(){
	event.preventDefault();
	$(this).attr("href");
	var href = $(this).attr("href"); ///*(una volta che abbiamo visto che funziona da questo step saltiamo ed andiamo al 2 per agg.l'overlay)
	//1.1.Mostrare l'overlay
	$overlay.show(); ///* poi prima di passare al punto 1.2, nominiamo la variabile sotto per poi al punto 2.1 agg.variabile
	//1.2.Mostrare sull'overlay l'immagine cliccata
	$immagine.attr("src", href);
	$immagine.show(); /* torno a main.css e modifico l'immagine, una volta fatto passo poi al punto 3*/
	//1.3.Mostrare il testo sull'overlay
	var testoDescrizione = $(this).children("img").attr("alt");
	$descrizione.text(testoDescrizione);
});

var $overlay = $('<div id="overlay"></div>');
var $immagine = $('<img>'); /*passo al punto 2.1 aggingere variabile*/
var $descrizione = $('<p></p>');

//2.Aggiungere l'overlay
$("body").append($overlay); ///*(fatto il punto 1, poi da cui andiamo su main.css e diamo le caratteristiche che vogliamo ad #overlay.Poi una volta modificato il nostro main.css, saltiamo e torniamo al punto 1.1.Mostrare Overlay*/
	//2.1.Aggiungere l'immagine
$overlay.append($immagine); ///*una volta fatto poi torniamo su al punto 1.2*/
	//2.2.Aggiungerci il testo
$overlay.append($descrizione);

//3.Quando clicco sull'overlay
$overlay.click(function(){
	//3.1.Si nasconde l'overlay
	$overlay.hide(); /* poi torno al punto 1.3, nominando prima la variabile e aggiungendo il testo (punto 2.2) */
});


   