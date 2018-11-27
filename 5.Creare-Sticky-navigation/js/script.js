$(".main-header").sticky();

 $(".main-header").on('sticky-start', function() { 
 	$(".main-header h2").hide();
 	$(".main-header h1").css("margin-top","15px");
 });

 $(".main-header").on('sticky-end', function() { 
 	$(".main-header h2").show();
 	$(".main-header h1").css("margin-top","1px");
 });

 $(".banner p").sticky({
 	topSpacing: 65
 });

///sfida: cambiare il colore della scritta (solo per far vedere l'effetto anche se con il design non ci andrebbe molto)
$(".banner").on('sticky-start', function() { 
 	$(".banner p").css("color","black");
 });

$(".banner").on('sticky-end', function() { 
 	$(".banner p").css("color","white");
 });
 

