const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
  // return firstLetter + restOfTheWord;
};

console.log(capitalize('nICo'));
console.log(capitalize('noksjdf'));
