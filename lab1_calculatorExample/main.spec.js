describe("main.js", () => {

    describe("main()", () => {
        const error = "Input should contain only  +,-,*,/ operations";
        const notValidInputMsg = "Input is not valid,It should contain only number and operator EX:10+2";
        it("validate expression if the first number is invalid", () => {
            spyOn(window, 'updateResult');//.and.stub() this is optional , to create spy for a function
            Calculate('a+2');
            //expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(notValidInputMsg);
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("validate expression if the second number is invalid", () => {
            spyOn(window, 'updateResult').and.stub();
            Calculate('2+a');
            //expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(notValidInputMsg);
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("validate expression if the operator is invalid", () => {
            spyOn(window, 'updateResult').and.stub();
            Calculate('2a2');
            //expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(error);
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("call add", () => {
            //let cal = new Calculator();
            spyOn(window, 'updateResult').and.stub();
            var cal_add_spy = spyOn(Calculator.prototype, 'add');
            Calculate('2+3');
            expect(cal_add_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalledWith(2);
            expect(cal_add_spy).toHaveBeenCalledWith(3);
            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
            expect(window.updateResult).toHaveBeenCalledTimes(1);
            expect(window.updateResult).toHaveBeenCalledWith(undefined);
        })
        it("call divide with non zero ", () => {
            spyOn(window, 'updateResult').and.stub();
            var cal_divide_spy = spyOn(Calculator.prototype,'divide');
            var cal_add_spy = spyOn(Calculator.prototype, 'add');
            Calculate('2/0');
            expect(cal_divide_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalledWith(2);
            expect(cal_divide_spy).toHaveBeenCalledWith(0);
           
        })
        it("call updateResult with callThrough", () => {
            //let cal = new Calculator();
            var updateResult_spy =  spyOn(window, 'updateResult');
            var cal_add_spy = spyOn(Calculator.prototype, 'add').and.callThrough();//after spy then callThrough will call teh real function
            Calculate('2+3');
            expect(updateResult_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalledWith(3);
            expect(updateResult_spy).toHaveBeenCalledWith(5);
            expect(updateResult_spy).toHaveBeenCalledTimes(1);
        })
        it("call updateResult with call fake", () => {
            //let cal = new Calculator();
            var updateResult_spy =  spyOn(window, 'updateResult');
            var total = 0;
            var cal_add_spy = spyOn(Calculator.prototype, 'add').and.callFake((number)=>{
                return "Fake call";
            });//after spy then callFake will call the  fake function
            Calculate('2+3');
            expect(updateResult_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalledWith(2);
            expect(cal_add_spy).toHaveBeenCalledWith(3);
            expect(cal_add_spy).toHaveBeenCalledTimes(2);
            expect(updateResult_spy).toHaveBeenCalledWith("Fake call");
            expect(updateResult_spy).toHaveBeenCalledTimes(1);
        })
        it("call updateResult with returnValue", () => {
            //let cal = new Calculator();
            var updateResult_spy =  spyOn(window, 'updateResult');
            //after spy then returnValue the value
            var cal_add_spy = spyOn(Calculator.prototype, 'add').and.returnValue("Fake call");
            Calculate('2+3');
            expect(updateResult_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalledWith(2);
            expect(cal_add_spy).toHaveBeenCalledWith(3);
            expect(cal_add_spy).toHaveBeenCalledTimes(2);
            expect(updateResult_spy).toHaveBeenCalledWith("Fake call");
            expect(updateResult_spy).toHaveBeenCalledTimes(1);
        })
        it("call updateResult with returnValues", () => {
            //let cal = new Calculator();
            var updateResult_spy =  spyOn(window, 'updateResult');
            //after spy then returnValue the value
            var cal_add_spy = spyOn(Calculator.prototype, 'add').and.returnValues(null,"second call");
            Calculate('2+3');
            expect(updateResult_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalled();
            expect(cal_add_spy).toHaveBeenCalledWith(2);
            expect(cal_add_spy).toHaveBeenCalledWith(3);
            expect(cal_add_spy).toHaveBeenCalledTimes(2);
            expect(updateResult_spy).toHaveBeenCalledWith("second call");
            expect(updateResult_spy).toHaveBeenCalledTimes(1);
        })
       
    });
    describe("showVersion()",()=>{
        /*beforeEach(()=>{
        domEle = document.createElement("span");
        domEle.setAttribute("id","version");
        document.body.appendChild(domEle);
        this.documentEle = domEle;
        })
        afterEach(()=>{
            document.body.removeChild(this.documentEle);
        })*/
        xit("Should show version number_old",()=>{
            var getElespy = spyOn(document,"getElementById").and.returnValue({
                innerHTML:null
            })
            var spy =spyOnProperty(Calculator.prototype,"version",'get').and.returnValue("1.0");
            showVersion();
            expect(spy).toHaveBeenCalled();
            expect(spy()).toBe("1.0")
        })
        it("Should show version number",(done)=>{
            var getElespy = spyOn(document,"getElementById").and.returnValue({
                innerHTML:null
            })
            var spy =spyOnProperty(Calculator.prototype,"version",'get').and.returnValue(Promise.resolve("1.0"));
            showVersion();
            expect(spy).toHaveBeenCalled();
            spy().then(function(verion){
                //expect(verion).toBe("1.0");
                expect(getElespy().innerHTML).toBe("1.0");
                done();
            });
            
        })
    })
    /*describe("updateResult()", () => {
    beforeAll(()=>{
         domElement = document.createElement("div");
         domElement.setAttribute("id","resultValue");
         document.body.appendChild(domElement);
         this.domElement = domElement;
    });
    afterAll(()=>{
        document.body.removeChild(this.domElement);
    })
        it("add result to the dom element", () => {
           
            updateResult(10);
            const resultValue = this.domElement.innerHTML;
            //const resultValueNumber = parseInt(resultValue);
            expect(resultValue).toEqual('10');
        })
    });*/
})