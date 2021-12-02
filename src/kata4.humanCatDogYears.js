const humanCatDogYears = number => {
  const humanYears = [number];
  let catYears = number * 4;
  let dogYears = number * 5;

  if (number >= 1) {
    catYears += 11;
    dogYears += 10;
  }

  if (number >= 2) {
    catYears += 5;
    dogYears += 4;
  }

  humanYears.push(catYears);
  humanYears.push(dogYears);

  return humanYears;
};

module.exports = humanCatDogYears;
