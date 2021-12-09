const joinNames = namesObj => {
  const stringOfNames = namesObj.reduce((accumulator, person, index) => {
    if (index === 0) return `${person.name}`;
    if (index !== namesObj.length - 1) return `${accumulator}, ${person.name}`;
    return `${accumulator} & ${person.name}`;
  }, "");

  return stringOfNames;
};

module.exports = joinNames;
