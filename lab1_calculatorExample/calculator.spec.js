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

describe("get Version",()=>{
  //done is a callback , it say to jasmin , call has to wait until promise resolved
  it("fetch verion from the external resources",(done)=>{
    spyOn(window,'fetch').and.returnValue(Promise.resolve(new Response('{"version":"1.0"}')))
    calc.version.then(function(version){
       expect(version).toBe("1.0");
       done();
    })
  })
  it("fetch verion from the external resources by async and await ", async ()=>{
    spyOn(window,'fetch').and.returnValue(Promise.resolve(new Response('{"version":"1.0"}')))
    const version = await calc.version;
    expect(version).toBe("1.0");
       
  })
})
/*it("Check is Number typeof",()=>{
jasmine.addMatchers(customMatcher);
var a=10;
expect(a).toBeNumber();
})*/
  
})