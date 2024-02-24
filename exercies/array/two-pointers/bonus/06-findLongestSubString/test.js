const findLongestSubstring = require("./index");

test("`rithmschool` => 7", () => {
  expect(findLongestSubstring(rithmschool)).toEqual(7);
});

test("`` => 0", () => {
  expect(findLongestSubstring("")).toEqual(0);
});

test("`bbbbbb` => 1", () => {
  expect(findLongestSubstring("bbbbbb")).toEqual(1);
});
