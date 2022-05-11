//const jasmine = require("jasmine");

describe("Calculator test",()=>{
  let calc;
  beforeEach(()=>{
    calc = new Calculator();
  })
  afterEach(()=>{
    calc=null;
  })
  describe("add()",()=>{
    it("should add number to the total",()=>{
      console.log("This is my first test");
      calc.add(5);
      expect(calc.total).toBe(5)
      expect(calc.total).not.toBe(51)
      expect(calc.total).not.toBe(52)
    })
  })
  describe("subract()",()=>{
    xit("should substract number to the total",()=>{
      console.log("This is my first test");
      
    })
  })
  describe("multiplication()",()=>{
    it("should multiplication output not a number",()=>
 {
 
  calc.total=10
  var res = calc.multiply('a');
 // expect(res).not.toBeNaN();
 expect(res).toBeNaN();
  })
  })

it("Item contain in a array object",()=>{
  var person=[{"name":"bala"},{"name":"mani"}];
  expect(person).toContain({"name":"bala"})
})
describe("multiplication()",()=>{
  it("should divide function throw exception if passed 0",()=>
  {
   
    calc.total=10
    expect(()=>{calc.divide(0)}).toThrow();
  })
  
  it("should divide function throw exception error msg if passed 0",()=>
  {
    
    calc.total=10
    expect(()=>{calc.divide(0)}).toThrowError("Input cant be Zero...");
  })
  it("should divide function throw exception error msg if pass string",()=>
  {
   
    calc.total=10
    expect(()=>{calc.divide('ss')}).toThrowError(BadRequestError,"Input cant be string");
  });
  it("should return total number",()=>{
   
    calc.total=10
     //expect(calc.add(10)).toMatch(/-?\d+/)
     expect("This is my test").toMatch(/test$/)
  })
  it("Check Asymmetric matcher",()=>{
   
    calc.total=10
     //expect(calc.add(10)).toMatch(/-?\d+/)
     expect(calc.total).toEqual(jasmine.anything());
  })
  it("Check is Calculator Instance",()=>{
    jasmine.addMatchers(customMatcher);
    
    //calc.total=10
     //expect(calc.add(10)).toMatch(/-?\d+/)
     expect(calc).toBeCalculator();
  })
});

/*it("Check is Number typeof",()=>{
jasmine.addMatchers(customMatcher);
var a=10;
expect(a).toBeNumber();
})*/
  
})