function printNumber(index,maxCount,){
    console.log(index);
    if(index<maxCount){
        index++;
        printNumber(index,maxCount);
    }
}
printNumber(0,10);