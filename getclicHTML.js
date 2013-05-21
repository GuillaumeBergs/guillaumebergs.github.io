var bindEvent = function(elem ,evt,cb) {
        //vérifie si addEventListenerexiste dans l'élément
        if ( elem.addEventListener ) {
            elem.addEventListener(evt,cb,false);
        //si addEventListener n'est pas présent, vérifie si le navigateur est une version  d'IE
        } else if ( elem.attachEvent ) {
            //ajoute le préfixe "on" à l'event
            elem.attachEvent('on' + evt, function(){
                // Simule addEventListener ; s'assure que le callback obtient l'élément pour "this" et s'assure que le premier élément de la fonction est un event
                 cb.call(event.srcElement,event);
            });
        }
    }

bindEvent(document,'click', function(event) 
{ var target = event.target || event.srcElement;
        alert ( target.innerHTML );
	 this.removeEventListener('click',arguments.callee,false);
});
