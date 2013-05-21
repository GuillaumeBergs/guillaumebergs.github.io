var bindEvent = function(elem ,evt,cb) {
        //see if the addEventListener function exists on the element
        if ( elem.addEventListener ) {
            elem.addEventListener(evt,cb,false);
        //if addEventListener is not present, see if this is an IE browser
        } else if ( elem.attachEvent ) {
            //prefix the event type with "on"
            elem.attachEvent('on' + evt, function(){
                /* use call to simulate addEventListener
                 * This will make sure the callback gets the element for "this"
                 * and will ensure the function's first argument is the event object
                 */
                 cb.call(event.srcElement,event);
            });
        }
    }
