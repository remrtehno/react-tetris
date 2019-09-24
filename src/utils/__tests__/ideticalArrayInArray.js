import {identicalArrayInArray} from "../identicalArrayInArray";

describe("identicalArrayInArray", () => {
  it("[[22,20], [12,7]], [[22,0], [2,7]]", () => {
    const result = identicalArrayInArray([[22,20], [12,7]], [[22,0], [2,7]]);
    expect(result).toEqual(false);
  });

  it("[[8,9], [1,0]], [[0,0], [8,9]]", () => {
    const result = identicalArrayInArray([[8,9], [1,0]], [[0,0], [8,9]]);
    expect(result).toEqual(true);
  });



});


