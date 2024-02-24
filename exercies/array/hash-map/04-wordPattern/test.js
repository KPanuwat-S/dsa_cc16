const wordPattern = require("./index");

test("'abba', 'dog cat cat dog' --> true", () => {
  expect(wordPattern("abba", "dog cat cat dog")).toEqual(true);
});
