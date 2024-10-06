const isValidIsbn13 = (isbn) => {
  var set = isbn.replaceAll(/\D/g, "").split("").map(Number);
  if (set.length !== 13) {
    return false;
  }
  const lastDigit = set.pop();
  const checksum = set.reduce((acc, num, index) => {
    const indexNum = (index + 1) % 2;
    return acc + num * (indexNum > 0 ? 1 : 3);
  }, 0);

  const checkDigit = 10 - (checksum % 10);
  return ((checkDigit > 9) ? 0 : checkDigit) == lastDigit;
};

const isValidIsbn10 = (isbn) => {
  var set = isbn.replaceAll(/[^0-9xX]/g, "").split("").map((char, index) => {
    return (["x", "X"].includes(char) && index == 9) ? 10 : Number(char);
  });

  if (set.length !== 10) {
    return false;
  }
  const checksum = set.reduce((acc, num, index) => {
    return acc + (num * (10 - index));
  }, 0);

  return checksum % 11 == 0;
}

export { isValidIsbn13, isValidIsbn10 };
