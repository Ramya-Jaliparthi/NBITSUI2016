/**
 * Created by Administrator on 3/11/2016.
 */

function createDateArray(year,month){

    var initialDay=1;
    var maxDays=1;
    if(month=="feb") {
        if (year % 4 == 0) {
            maxDays = 29;
        }
        else {
            maxDays = 28;
        }
    }
    else{
        if(month=="jan" ||month=="mar"
            ||month=="may"||month=="jul"||month=="aug"
            ||month=="oct" ||month=="dec") {
            maxDays = 31;
        }
        else{
            maxDays=30;
        }
    }
    var daysArray=[]
    while(initialDay<=maxDays){
        daysArray.push(initialDay);
        initialDay++
    }

    console.log(daysArray);
}

createDateArray(2015,"feb");
createDateArray(2016,"mar");
createDateArray(2020,"feb");
createDateArray(2014,"apr");