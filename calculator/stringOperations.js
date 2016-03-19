/**
 * Created by Administrator on 3/10/2016.
 */

function printFullName(firstName,lastName){
    console.log(firstName+" "+lastName);
}
function creditCardDetails(creditCardNum){
    console.log(creditCardNum);
    console.log(creditCardNum.length);
    console.log(creditCardNum.substring(15,19));
}
creditCardDetails("1234-5678-9123-4567")
printFullName("kiran","PVS");