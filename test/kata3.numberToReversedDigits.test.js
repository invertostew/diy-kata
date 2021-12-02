const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns an array", () => {
    expect(Array.isArray(numberToReversedDigits(12345))).toBe(true);
  });
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(91237)).toEqual([7, 3, 2, 1, 9]);
    expect(numberToReversedDigits(10249)).toEqual([9, 4, 2, 0, 1]);
  });
});
