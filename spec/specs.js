describe('makeTriangle', function() {
    it("takes a triangle with a=1, b=1, c=1 and returns equilateral", function() {
        expect(makeTriangle(1,1,1)).to.equal('equilateral')
    });
})
