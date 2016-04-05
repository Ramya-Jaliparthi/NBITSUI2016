(
  function()
    {
        $(document).ready(function(){
            loadCountryDropDown();
            bindEvents();
            showInformation("personal");
        });
        
        function loadCountryDropDown(){
            var countries= models.countryList();
            var ddlCountries= $('#ddlCountry');
            $.each(countries,function(index,item){
               var optionTag=$("<option>");
               $(optionTag)
                   .val(item.code)
                   .text(item.name);
                $(ddlCountries).append(optionTag);
            });
            
            //default selected Value
            $(ddlCountries).val("");
        };
        
        function loadStateDropDown(){
            
        }
        
        function bindEvents(){
            $('#registerPersonal').bind('click',registerPersonalInfo);
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
        
        function registerPersonalInfo(){
            var personalInfo={
                firstName:$('#txtFirstName').val(),
                lastName:$("#txtLastName").val(),
                country:$("#ddlCountry").val()
            };   
        console.log(personalInfo);
            showInformation("education");
     }
        
    }
)();