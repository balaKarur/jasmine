class ArithmeticError extends Error{
constructor(message){
    super(message);
    this.name='ArithmeticError';
}
}
class BadRequestError extends Error{
    constructor(message){
        super(message);
        this.name='BadRequestError';
    }
    }


function Calculator(){
    this.total=0;
    
}
Calculator.prototype.add = function(number){
    return this.total += number;
}
Calculator.prototype.subtract = function(number){
    return this.total -= number;
}
Calculator.prototype.multiply = function(number){
    return this.total *= number;
}
Calculator.prototype.divide = function(number){
    if(typeof number === 'string')
    {
        throw new BadRequestError("Input cant be string");
    }
    else if(number !== 0)
    {
        return this.total /= number;
    }
    else
    {
        console.log("Input cant be Zero...");
        throw new Error("Input cant be Zero...");
    }
    
}
Object.defineProperty(Calculator.prototype,"version",{
    get : function(){
        return fetch("https://raw.githubusercontent.com/balaKarur/jasmine/main/testdata.json")
        .then(function(result){
           return result.json();
        })
         .then(function(jsonData){
            return jsonData.version;
         })
    },
   configurable:true,//to update the version property , to delete version property in object 
   // enumerable:true//to be visible out side when we are looping
})
