(
 function(){
     this.htmlControls={
       travellingType:document.getElementById("ddlTravelType"),
       from:document.getElementById("txtTravelFrom"),
       to:document.getElementById("txtTravelTo"),
         btnTicket:document.getElementById("btnTicket"),
     };
     
     var generateTicket = function(travellingMode){
        // var travellingMode = htmlControls.travellingType.value;
         function printTicket(source,destination){
             console.log(travellingMode);
             console.log(source);
             console.log(destination);
         }
         
         return printTicket;
     };
     /*var addEvents = function(){
        htmlControls.btnTicket.addEventListener("click",generateTicket);
     }*/
     var flightTicket = generateTicket("Flight");
     var trainTicket = generateTicket("Train");

     trainTicket("Hyd","vij");
     flightTicket("Hyd","Bombay");
 }
)();
