const humanCatDogYears = number => {
  let catYears = number * 4; // get the total without year 1 & 2
  let dogYears = number * 5; // get the total without year 1 & 2

  if (number >= 1) {
    catYears += 11; // add 11 to 4 to make 15 for year 1
    dogYears += 10; // add 10 to 5 to make 15 for year 1
  }

  if (number >= 2) {
    catYears += 5; // add 5 to 4 to make 9 for year 2
    dogYears += 4; // add 4 to 5 to make 9 for year 2
  }

  const yearsArray = [number, catYears, dogYears];

  return yearsArray;
};

module.exports = humanCatDogYears;
