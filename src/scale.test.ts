import { Scale } from "./scale";

describe("Scale", () => {
  it("sets major scale", () => {
    let scale = new Scale("C4", "major");

    expect(scale.getNotes()).toEqual([
      "C4",
      "D4",
      "E4",
      "F4",
      "G4",
      "A4",
      "B4"
    ]);
  });
  it("handles cusotm length", () => {
    let scale = new Scale("C4", "major", 8);
    expect(scale.getNotes().length).toBe(8);
    expect(scale.getNotes()[7]).toBe("C5");
  });
});
