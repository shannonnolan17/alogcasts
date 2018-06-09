// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMapA = {};
  const charMapB = {};

  replaceStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  replaceStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  splitA = replaceStringA.split('')
  splitB = replaceStringB.split('')

  for (let char of splitA) {
    if (charMapA[char]) {
      charMapA[char]++;
    } else {
      charMapA[char] = 1;
    }
  }

  for (let char of splitB) {
    if (charMapB[char]) {
      charMapB[char]++;
    } else {
      charMapB[char] = 1;
    }
  }


}

module.exports = anagrams;
