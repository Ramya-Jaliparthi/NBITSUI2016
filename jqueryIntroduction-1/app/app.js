(
  function()
    {
        $(document).ready(function(){
            loadCountryDropDown();
            loadStateDropDown();
            bindEvents();
            showInformation("personal");
        });
        
        function loadCountryDropDown(){
            var countries =[{
                value:"IN",text:"India"
            },{
                "value":"US","text":"United States"
                
            },{
              "value":"WI","text":"West Indies"   
            }];
                           
        }
        function loadStateDropDown(){
            
        }
        function bindEvents(){
            
        }
        function  showInformation(type){
            $('.panel-default').hide();
            if(type==="personal"){
               $('#pnlPersonalInformation').show();
            }
            if(type==="education"){
                //show education Information
                 $('#pnlEducationInformation').show();
            }
            if(type==="professional"){
                //show professional Information
                 $('#pnlProfessionalInformation').show();
            }
        }
        
    }
)();