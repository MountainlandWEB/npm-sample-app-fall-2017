const MathUtils = require('./jasmineTest');

describe("MathUtils", () => {
	describe("add", () => {
		it("should add 2 numbers", () => {
			expect(MathUtils.add(1,2)).toBe(3);
		});
		it("gracefully handle non-numbers", () => {
			expect(MathUtils.add('two','strings')).toBe("twostrings");
			expect(MathUtils.add('string', 4)).toBe("string4");
		});
		it("should handle negative number", () => {
			expect(MathUtils.add(-1,-2)).toBe(-3);
			expect(MathUtils.add(-1,2)).toBe(1);
		});
		it("should handle non-integer numbers", () => {
			expect(MathUtils.add(1.2, 2.4)).toBeCloseTo(3.6,.00001);
		});
	});
	describe("subtract", () => {
		it("should subtract 2 numbers", () => {
			expect(MathUtils.subtract(1,2)).toBe(-1);
		});
		it("should gracefully handle non-numbers", () => {
			expect(() => {MathUtils.subtract("not", "number");})
				.toThrow(new Error("Either not or number was not a number"));
			expect(() => {MathUtils.subtract("not", 2);})
				.toThrow(new Error("Either not or 2 was not a number"));
		});
		it("should handle negative number", () => {
			expect(MathUtils.subtract(-1,-2)).toBe(1);
			expect(MathUtils.subtract(-1,2)).toBe(-3);
		});
		it("should handle non-integer numbers", () => {
			expect(MathUtils.subtract(1.2, 2.4)).toBeCloseTo(-1.2,.00001);
		});
	});
	describe('average',()=>{
		it ('should work with multiple items', ()=>{
			expect(MathUtils.average(2,4)).toBe(3)
		});
		it ('should handel non numbers', ()=>{
            expect(() => {MathUtils.average("not", "number");})
                .toThrow(new Error (`not, is not a number`));
		});
		it ('should handel non numbers', ()=>{
            expect(() => {MathUtils.average(null, "number");})
                .toThrow(new Error (`null, is not a number`));
        });
		it ('should handel non numbers', ()=>{
            expect(() => {MathUtils.average(true, "number");})
                .toThrow(new Error (`true, is not a number`));
        });
		it('should handel multiple numbers', ()=>{
            expect(MathUtils.average(2,2,2,2,2,2,2,2,2,2)).toBe(2);
            expect(MathUtils.average(4,8,8,4)).toBe(6)
		});
        it('should handel negative numbers', ()=>{
            expect(MathUtils.average(-1,-3,-5,)).toBe(-3)
        });
        it('should handel decimals', ()=>{
            expect(MathUtils.average(0.1,0.2,0.4,)).toBeCloseTo(0.23,.00001)
        });
	})
});
