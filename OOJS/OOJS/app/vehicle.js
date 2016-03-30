function vehicle(year,make,model) {
    var VIN;
    this.year = year;
    this.model = model;
    this.make = make;
    this.getVIN = function () {
        VIN = Math.random()*100000;
        console.log(VIN);
        return VIN;
    }
}

var bike = new vehicle("2016","Honda","CBR");
console.log(bike);
bike.getVIN();
