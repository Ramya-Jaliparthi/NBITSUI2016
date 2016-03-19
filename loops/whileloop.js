/**
 * Created by Administrator on 3/11/2016.
 */
function printMonths(){
    var monthValue=1;
    var monthsArray=[];
    while(monthValue<12){

        if(monthValue==1){
          monthsArray.push("Jan");
        }
        if(monthValue==2){
            monthsArray.push("FEB");
        }
        monthValue++;
    }
    console.log(monthsArray);
}


printMonths();