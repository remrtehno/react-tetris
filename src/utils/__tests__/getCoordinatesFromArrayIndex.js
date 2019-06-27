import {getCoordinatesFromArrayIndex} from "../getCoordinatesFromArrayIndex";

describe("getCoordinatesFromArrayIndex", () => {
  it("index0 width 8", () => {
    const coord = getCoordinatesFromArrayIndex(0, 8);
    expect(coord).toEqual([0, 0]);
  });

  it("index5 width 4", () => {
    const coord = getCoordinatesFromArrayIndex(4, 4);
    expect(coord).toEqual([0, 1]);
  });

  it("index 5 width 3", () => {
    const coord = getCoordinatesFromArrayIndex(4, 3);
    expect(coord).toEqual([1, 1]);
  });
});
