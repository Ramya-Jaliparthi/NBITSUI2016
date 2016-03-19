/**
 * Created by Administrator on 3/17/2016.
 */

function getVehicles(){
    var vehicles = [
        {year:2010,make:"Audi",model:"A5"},
        {year:2010,make:"Audi",model:"A6"},
        {year:2014,make:"Benz",model:'c2000'},
        {year:2016,make:"Benz",model:'4000'},
        {year:2010,make:"Maruti",model:'Wagnor'}
    ];
    return vehicles;
}

function printVehicleDetails(year){
    var vehicles,vehiclesArrayForYear=[];
        vehicles= getVehicles();
    //loop to get the vhielces of year 2010.
    for(var i=0;i<vehicles.length;i++){
        if(vehicles[i].year==year){
            vehiclesArrayForYear.push(vehicles[i]);
        }
    }
    console.log(vehiclesArrayForYear);
    printVehicleDetailsOfMake(vehiclesArrayForYear,"Audi")
}

function printVehicleDetailsOfMake(vehicleArray,make){
    for(var i=0;i<vehicleArray.length;i++){
        if(vehicleArray[i].make==make){
            console.log(vehicleArray[i]);
        }
    }
}
var year=2010;
printVehicleDetails(year);