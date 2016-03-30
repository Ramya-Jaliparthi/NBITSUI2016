(
    function(vehicleStore,util){
       /* console.log(vehicleStore);
        var vehicle={year:2012,make:"Audi",model:"A5"};
        vehicleStore.addVehicle(vehicle);*/
        function init(){
            var year= document.getElementById('txtVehicleYear');
            year.addEventListener('keypress',handleVehicleYear);
        }
        
        function handleVehicleYear(evt){
            console.log(evt.keyCode);
            if(util.numbersOnly(evt)){
                
            }
            else{
                evt.preventDefault();
            }
            
        }
        
        
        init()
        
    }

)(window.vehicleStore,window.util);