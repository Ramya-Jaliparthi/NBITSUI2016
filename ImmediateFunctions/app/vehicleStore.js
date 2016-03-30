(
 function(vehicleStore){
    if(!vehicleStore){
        vehicleStore={};
    }
     var vehicles = [{year:2012,make:"Audi",model:"A8"},
                      {year:2016,make:"Benz",model:"C2000"}];
     vehicleStore.addVehicle=function(vehicle){
         console.log("---Vehicle added---");
         vehicles.push(vehicle);
         console.log(vehicles);
         console.log("--end of vehicle Addition");
         
     };
     vehicleStore.getVehilces= function(){
         
     };
     vehicleStore.deleteVehicle =function(){
         
     };
     console.log(window.vehicleStore);
 }
)(window.vehicleStore={});
