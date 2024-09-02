import { assert } from "chai";

function add(...nums) {
  return nums.reduce((store, curr) => {
    return store + curr;
  }, 0);
}

// console.log(add());

describe("testing the add function", function () {
  it("should return 5 to the addition of 2 and 3", function () {
    const result = add(2, 3);
    assert(result, 5);
  });

  it("should return 0 if there are no nums", function () {
    const result = add();
    assert(result, 0);
  });
});
