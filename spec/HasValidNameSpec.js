describe("hasValidName", function(){
    var hasValidName = require("../lib/HasValidName")
    it("should contain special characters", function(){
        nameValue.currentValue = 'João % Paulo';
        hasValidName()
        expect(nameValue.isItValid).to.be.false
    })
})