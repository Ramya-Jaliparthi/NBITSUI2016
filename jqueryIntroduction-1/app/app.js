(
  function()
    {
        $(document).ready(function(){
            loadCountryDropDown();
            bindEvents();
            showInformation("personal");
            addStyles();
        });
        
        function addStyles(){
            $('button').addClass("btn");
            $('button').addClass("btn-primary");
                                 
            $('input').each(function(index,item){
                if($(item).attr("type")=='text'){
                    $(item).addClass("form-control");
                }
            })
        }
        
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
          console.log($(this));
            $(this).attr('disabled',true);
            $("input").attr("readonly",true);
            createAnotherButton();
           // showInformation("education");
     }
        
        function createAnotherButton(){
            var btn=$("<button>").addClass("btn btn-info")
                               .attr("id","btnNext")
                            .text("New Button");
            $(btn).bind("click",function(){
                alert("hello");
            })
            $("#divButtons").append(btn);
        }
        
    }
)();