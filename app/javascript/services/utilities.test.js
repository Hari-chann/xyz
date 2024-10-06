import { isValidIsbn13, isValidIsbn10 } from "./utilities";
import { faker } from "@faker-js/faker";

describe("ISBN Validator Tests", () => {
  test("Valid ISBN-13 should return true", () => {
    const validIsbn13 = faker.commerce.isbn(13);
    expect(isValidIsbn13(validIsbn13)).toBe(true);
  });

  test("Valid ISBN-10 should return true", () => {
    const validIsbn10 = faker.commerce.isbn(10);
    expect(isValidIsbn10(validIsbn10)).toBe(true);
  });

  // Generate an invalid ISBN-13 by modifying a valid one
  const generateInvalidIsbn13 = (isbn) => {
    const isbnArr = isbn.split("");
    const indexToChange = faker.number.int({ min: 0, max: 11 });
    isbnArr[indexToChange] = (Number(isbnArr[indexToChange]) + 1) % 10;
    return isbnArr.join("");
  };

  // Generate an invalid ISBN-10 by modifying a valid one
  const generateInvalidIsbn10 = (isbn) => {
    const isbnArr = isbn.split("");
    const indexToChange = faker.number.int({ min: 0, max: 8 });
    isbnArr[indexToChange] = (Number(isbnArr[indexToChange]) + 1) % 10;
    return isbnArr.join("");
  };

  // Test invalid ISBN-13 by modifying valid ISBN-13
  test("Invalid ISBN-13 should return false", () => {
    const validIsbn13 = faker.commerce.isbn(13);
    const invalidIsbn13 = generateInvalidIsbn13(validIsbn13);
    expect(isValidIsbn13(invalidIsbn13)).toBe(false);
  });

  // Test invalid ISBN-10 by modifying valid ISBN-10
  test("Invalid ISBN-10 should return false", () => {
    const validIsbn10 = faker.commerce.isbn(10);
    const invalidIsbn10 = generateInvalidIsbn10(validIsbn10);
    expect(isValidIsbn10(invalidIsbn10)).toBe(false);
  });
});
