/**
 * Created by Administrator on 3/19/2016.
 */


function createTd(elementType,textToDisplay){
    var td=document.createElement(elementType);
    td.innerText=textToDisplay;
    return td;
}

function createTr(elementType,vehicle){
    var tr=document.createElement(elementType);
    var yearTd= createTd("td",vehicle.year);
    var makeTd= createTd("td",vehicle.make)
    var modelTd= createTd("td",vehicle.model)

    tr.appendChild(yearTd);
    tr.appendChild(makeTd);
    tr.appendChild(modelTd);
    return tr;
}
 var getVehicles= function(){
     var vehicles =[{year:"2016",make:"Audi",model:"A5"},
         {year:"2015",make:"Audi",model:"A6"}];
     return vehicles;
 }

function mainFun(){
    var vehicles= getVehicles();
    var vehicleTable= document.getElementById("tblVehicles");
    for(var i=0;i<vehicles.length;i++){
        var row=createTr("tr",vehicles[i]);
        vehicleTable.appendChild(row);
    }
}

mainFun();