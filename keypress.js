function detectKey(Event) 
{ 

if(Event==null) 
Event=event; 

kc = Event.keyCode; 
if (!kc) 
kc = Event.wich; 


alert(kc);

} 
