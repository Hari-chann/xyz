import { isValidIsbn13, isValidIsbn10 } from "./utilities";
import { faker } from "@faker-js/faker";

describe("ISBN Validator Tests", () => {
  test("Valid ISBN-13 should return true", () => {
    const validIsbn13 = faker.commerce.isbn({ variant: 13 });
    expect(isValidIsbn13(validIsbn13)).toBe(true);
  });

  test("Valid ISBN-10 should return true", () => {
    const validIsbn10 = faker.commerce.isbn(10);
    expect(isValidIsbn10(validIsbn10)).toBe(true);
  });

  // Test invalid ISBN-13 by modifying valid ISBN-13
  test("Invalid ISBN-13 should return false", () => {
    expect(isValidIsbn13("123456789123")).toBe(false);
  });

  // Test invalid ISBN-10 by modifying valid ISBN-10
  test("Invalid ISBN-10 should return false", () => {
    expect(isValidIsbn10("1234567891")).toBe(false);
  });
});
