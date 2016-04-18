(
function(){
    'use strict';
     function appendDivTag(){
         $("#divSales").append("<p id='firstP'>Appended Inside the div </p>");
         $("#divSales").prepend("<p id='secondP'>Prepend Inside the div </p>");
         $("#divSales").after("<h1>After the divTag</h1>");
         $("#divSales").before("<h1>Before the divTag</h1>");
         console.log("--Printing children--")
         console.log($('#divSales').children());
         
         console.log("--print Parent")
          console.log($('#secondP').parent());
         
         console.log("--Go to the next tag--");
         console.log($('#divSales').next());
         
     }
    
    
    
    appendDivTag();
    
}
)();