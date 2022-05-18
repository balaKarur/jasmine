function Calculate(inputvalue)
{
    let numberA;
    let numberB;
    let operator;
    cal = new Calculator();
    
    const expression = /\+|\-|\*|\//;
    var result = 0;
    const error = "Input should contain only  +,-,*,/ operations";
    const notValidInputMsg = "Input is not valid,It should contain only number and operator EX:10+2";
    //1)validateing the  expression,check input contain any operator
    operator = inputvalue.match(expression);
    if(operator === null)
    {
        updateResult(error);
        return;
    }
    //2)split the number by expression
    var numbers = inputvalue.split(expression);
    //if not valid number return
    //3)validate the number 
    if(isNaN(numbers[0]) || isNaN(numbers[1]))
    {
        updateResult(notValidInputMsg);
        return;
    } 
    numberA  = +numbers[0];
    cal.add(numberA);
    //numberB = parseInt(numbers[1]);
    numberB = +numbers[1];
    var result =0;
    //4)execute the logic
    switch(operator[0])
    {
        case '+':
            result = cal.add(numberB);
            break;
        case '-':
            result = cal.subtract(numberB);
            break;
        case '*':
            result = cal.multiply(numberB);
            break;
        case '/':
            result = cal.divide(numberB);
            break;
        
    }
    updateResult(result);
}
function updateResult(result)
{
    document.getElementById("resultValue").innerHTML = result ;
}
if(document !== undefined && document.getElementById("inputValue") !== null)
{
    document.getElementById("inputValue").addEventListener("change",(event)=>{
        Calculate(event.target.value);
    });
}
function showVersion()
{
    var calObj = new Calculator();
    var ele = document.getElementById("version");
    if(ele !== undefined)
    {
        calObj.version.then(function(version){
            ele.innerHTML = version;
        });
    }
    
}
//showVersion();


