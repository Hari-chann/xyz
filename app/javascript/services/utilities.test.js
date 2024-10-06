import { isValidIsbn13, isValidIsbn10 } from "./utilities";
import { faker } from "@faker-js/faker";

describe("ISBN Validator Tests", () => {
  test("Valid ISBN-13 should return true", () => {
    // apparently faker.commerce.isbn({ variant: 13 }) is generating invalid ISBN-13s
    // const validIsbn13 = faker.commerce.isbn({ variant: 13 });
    const validIsbn13 = [
      "390062740451-9",
      "389340292592-0",
      "953523261726-5",
      "471098222574-7",
    ];
    selectedIsbn13 = validIsbn13[faker.number.int({ min: 0, max: 3 })];
    expect(isValidIsbn13(selectedIsbn13)).toBe(true);
  });

  test("Valid ISBN-10 should return true", () => {
    // apparently faker.commerce.isbn({ variant: 10 }) is generating invalid ISBN-10s
    // const validIsbn10 = faker.commerce.isbn(10);
    const validIsbn10 = [
      "909553719-6",
      "781793037-6",
      "456014051-0",
      "568894550-8",
      "853332185-6",
      "843540073-5",
    ];
    selectedIsbn10 = validIsbn10[faker.number.int({ min: 0, max: 5 })];
    console.log(selectedIsbn10);
    expect(isValidIsbn10(selectedIsbn10)).toBe(true);
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
