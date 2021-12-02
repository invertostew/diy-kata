const numberToReversedDigits = number => {
  return Array.from(String(number), Number).reverse();
};

module.exports = numberToReversedDigits;
