(
    function(){
       
        function electronics(){
            this.wattage=".5";
            this.accessories=true;
        }
        var gadget= new electronics();
        electronics.prototype=productBase.product;
        console.log(electronics);
    }
)();