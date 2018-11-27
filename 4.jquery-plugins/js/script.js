$(".animsition").animsition({
	inClass: 'fade-in-up',
    outClass: 'fade-out-up',
    inDuration: 1500,
    outDuration: 800,
    linkElement: 'nav a',
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
