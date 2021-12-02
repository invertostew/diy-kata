const joinNames = namesObj => {
  const stringOfNames = namesObj.reduce((accumulator, person, index) => {
    if (index !== namesObj.length - 1) return `${accumulator}, ${person.name}`;
    return `${accumulator} & ${person.name}`;
  }, "");

  return stringOfNames.slice(2);
};

module.exports = joinNames;
