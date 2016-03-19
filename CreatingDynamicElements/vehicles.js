/**
 * Created by Administrator on 3/19/2016.
 */

function createLabel(){
    //1. create label
    //2. assign Id to label
    //3. assign text to label
    //4. attach label to container
    var lbl= document.createElement("label");
    var container= document.getElementById("container");
    lbl.setAttribute("id","lblVehYear");
    lbl.innerText="Year";
    console.log(lbl);
    container.appendChild(lbl);

}

function createInput(elementType,elementId,container,inputValue,inputType){
    var inp= document.createElement(elementType);
    inp.setAttribute("id",elementId);
    inp.value=inputValue;
    inp.type=inputType;
    container.appendChild(inp);

}
createLabel();
var container =document.getElementById("container");
createInput("input","txtYear",container,"2016","radio");

