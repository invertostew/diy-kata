const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("return 'Yes' when booleanToWord is passed true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });
  test("return 'No' when booleanToWord is passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
