const twoSum = require("./index");

test("nums = [0,1,2], target = 3 => [1,2]", () => {
  expect(twoSum([0, 1, 2], 3)).toEqual([1, 2]);
});

test("nums = [10,2,4], target = 14 => [0,2]", () => {
  expect(twoSum([10, 2, 4], 14)).toEqual([0, 2]);
});

test("nums = [10,2,4], target = 100 => -1", () => {
  expect(twoSum([10, 2, 4], 14)).toEqual(-1);
});
