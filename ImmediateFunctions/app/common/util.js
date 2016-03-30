(
    function(util){
        if(!util){
            util={};
        };
        
        util.numbersOnly=function(evt){
            if(evt.keyCode>=48 && evt.keyCode<=57){
                return true;
            }
            else{
                return false;
            }
        }
    }
)(window.util={});