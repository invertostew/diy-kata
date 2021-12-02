const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns an array", () => {
    expect(Array.isArray(humanCatDogYears(10))).toBe(true);
  });
  test("returns an array of human, cat, and dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });
});
