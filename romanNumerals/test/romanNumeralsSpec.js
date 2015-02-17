var expect = require("chai").expect

var target = require("../lib/romanNumerals.js")

describe("Roman Numerals", function(){

  target.init([
    { "intValue": 10, "charValue": "X" },
    { "intValue": 9, "charValue": "IX" },
    { "intValue": 5, "charValue": "V" },
    { "intValue": 4, "charValue": "IV" },
    { "intValue": 1, "charValue": "I" }
  ])

	describe("#Respond()", function(){
      it("1 => I", function() {
        var result = target.respond(1)
        expect(result).to.equal("I")
      })
      it("1 => II", function() {
        var result = target.respond(2)
        expect(result).to.equal("II")
      })
      it("4 => IV", function() {
        var result = target.respond(4)
        expect(result).to.equal("IV")
      })
      it("5 => V", function() {
        var result = target.respond(5)
        expect(result).to.equal("V")
      })
      it("9 => IX", function() {
        var result = target.respond(9)
        expect(result).to.equal("IX")
      })
      it("13 => XIII", function() {
        var result = target.respond(13)
        expect(result).to.equal("XIII")
      })
   	})
})