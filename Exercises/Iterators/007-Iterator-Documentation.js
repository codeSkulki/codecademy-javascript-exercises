const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
})


//checks my interestingWords filter to see if every word is > length of 5
console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));
