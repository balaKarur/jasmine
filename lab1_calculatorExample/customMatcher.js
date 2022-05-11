const customMatcher = {
  toBeCalculator:function(){
   return {
       compare:function(actual,expected){
           var result = {pass:true,message:""};
           if(actual instanceof Calculator){
            result = {pass:true,message:""};
           }
           else{
            result = {pass:false,message:`Expected ${actual} to be instanceof Calculator`};
           }
        return result;
       }
   }
  }
}