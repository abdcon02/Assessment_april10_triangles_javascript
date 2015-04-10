describe('makeTriangle', function() {
    it("takes a triangle with a=1, b=1, c=1 and returns equilateral", function() {
        expect(makeTriangle(1,1,1)).to.equal('equilateral')
    });

    it("takes a triangle with a=1, b=1, c=3 and returns isosceles", function() {
        expect(makeTriangle(1,1,3)).to.equal('isosceles')
    });

    it("takes a triangle with a=3, b=1, c=3 and returns isosceles", function() {
        expect(makeTriangle(3,1,3)).to.equal('isosceles')
    });

    it("takes a triangle with a=2, b=3, c=3 and returns isosceles", function() {
        expect(makeTriangle(2,3,3)).to.equal('isosceles')
    });
})
