/**
 * Created by Administrator on 3/11/2016.
 */

function createYear(){

    var currentYear=2016;
    var yearArray=[];
    for(var i= 2000;i<currentYear;i++){
        yearArray.push(i);

        if(i==2010)
        break;
    }
    console.log(yearArray);
}

createYear();