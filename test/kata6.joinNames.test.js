const { joinNames } = require("../src");

describe("joinNames", () => {
  const names = [
    {
      name: "Bart"
    },
    {
      name: "Lisa"
    },
    {
      name: "Maggie"
    }
  ];

  const moreNames = [
    {
      name: "Bart"
    },
    {
      name: "Lisa"
    },
    {
      name: "Maggie"
    },
    {
      name: "Marge"
    },
    {
      name: "Homer"
    }
  ];
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(names)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(moreNames)).toEqual("Bart, Lisa, Maggie, Marge & Homer");
    expect(joinNames([{ name: "Bart" }])).toEqual("Bart");
    expect(joinNames([{ name: "Bart" }, { name: "Lisa" }])).toEqual("Bart & Lisa");
  });
});
