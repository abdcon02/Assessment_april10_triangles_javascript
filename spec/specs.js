describe('makeTriangle', function() {
    it("takes a triangle with a=1, b=1, c=1 and returns equilateral", function() {
        expect(makeTriangle(1,1,1)).to.equal('equilateral')
    });

    it("takes a triangle with a=2, b=2, c=2 and returns equilateral", function() {
        expect(makeTriangle(2,2,2)).to.equal('equilateral')
    });

    it("takes a triangle with a=2, b=2, c=3 and returns isosceles", function() {
        expect(makeTriangle(2,2,3)).to.equal('isosceles')
    });

    it("takes a triangle with a=3, b=1, c=3 and returns isosceles", function() {
        expect(makeTriangle(3,1,3)).to.equal('isosceles')
    });

    it("takes a triangle with a=2, b=3, c=3 and returns isosceles", function() {
        expect(makeTriangle(2,3,3)).to.equal('isosceles')
    });

    it("takes a triangle with a=2, b=3, c=4 and returns scalene", function() {
        expect(makeTriangle(2,3,4)).to.equal('scalene')
    });

    it("takes a triangle with a=5, b=6, c=10 and returns scalene", function() {
        expect(makeTriangle(5,6,10)).to.equal('scalene')
    });

    it("takes a triangle with a=4, b=5, c=7 and returns scalene", function() {
        expect(makeTriangle(7,5,4)).to.equal('scalene')
    });

    it("takes a triangle with a=1, b=1, c=7 and returns This is not a triangle", function() {
        expect(makeTriangle(1,1,7)).to.equal('This is not a triangle')
    });

    it("takes a triangle with a=2, b=8, c=2 and returns This is not a triangle", function() {
        expect(makeTriangle(2,8,2)).to.equal('This is not a triangle')
    });
})
