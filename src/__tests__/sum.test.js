import sum from "../components/sum";

it("should test a function call", () => {
  const result = sum(5, 12);
  expect(result).toBe(17);
});
