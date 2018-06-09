// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString().split('');
  if (Math.sign(n) === - 1) {
    filter = str.filter(Number)
    rev = filter.reverse()
    return rev.join('')
  } else {
    filter = str.filter(Number)
    return filter.reverse().join('')
  }
}

module.exports = reverseInt;
