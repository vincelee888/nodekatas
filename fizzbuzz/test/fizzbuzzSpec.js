var expect = require("chai").expect

var fb = require("../lib/fizzbuzz.js")

describe("FizzBuzz", function(){

	var options = {
		3: "Fizz",
		5: "Buzz"
	};

	fb.init(options)

	describe("#Respond()", function(){
    	it("should respond with number as string with standard numbers", function() {
    		expect(fb.respond(1)).to.equal("1")
    		expect(fb.respond(2)).to.equal("2")
    		expect(fb.respond(4)).to.equal("4")
    		expect(fb.respond(7)).to.equal("7")
    		expect(fb.respond(8)).to.equal("8")
        })
       	it("should respond 'Fizz' to multiples of 3", function(){
           
           for(var i = 3; i < 100; i += 3) {
       	    	if(i % 5 != 0) {
		           var result = fb.respond(i)
		           expect(result).to.equal("Fizz")
		       }
		   }
       	})
       	it("should respond 'Buzz' to multiples of 5", function(){
           
       	    for(var i = 5; i < 100; i += 5) {
       	    	if(i % 3 != 0) {
		           var result = fb.respond(i)
		           expect(result).to.all.equal("Buzz")
		       }
		   }
       	})

       	it("should respond 'FizzBuzz' to multiples of 3 and 5", function() {
    		expect(fb.respond(15)).to.equal("FizzBuzz")
    		expect(fb.respond(30)).to.equal("FizzBuzz")
    		expect(fb.respond(45)).to.equal("FizzBuzz")
       	})
   	})
})