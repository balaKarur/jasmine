//matcher has to return compare.function with actual and expected
//and its return object with pass and message
var customMatcher = {
  toBeCalculator : function(){
       return {
          compare:function(actual,expected){
              response = {pass:fail,message:""};
              if(actual instanceof Calculator){
                  response = {pass:true,message:""};
              }else
              {
                  response = {pass:false,message:`Expected ${actual} is not instanceof Calculator`};  
              }
              return response;
          }
      }
  },
  toBeNumber : function(){
      return {
         compare:function(actual,expected){
             response = {pass:fail,message:""};
             if( typeof(actual) === "number" ){
                 response = {pass:true,message:""};
             }else
             {
                 response = {pass:false,message:`Expected ${actual} is not instanceof Number`};  
             }
             return response;
         }
     }
 }

};