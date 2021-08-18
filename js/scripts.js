// Utility Logic
function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function startsWithVowel(word) {
  if (noInputtedWord(word)) {
    return false;
  }
  const vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    if (word.toLowerCase().startsWith(vowels[i])) {
      return true;
    }
  }
  return false;
}

function startsWithConsonant (word) {
  const consonants = ["b", "c", "d", "f", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  for (let i = 0; i < consonants.length; i++) {
    if (word.toLowerCase().startsWith(consonants[i])) {
      return true;
    }
  }
  return false;
}

function startsWithConsonant (word) {
  const consonants = ["b", "c", "d", "f", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  for (let i = 0; i < consonants.length; i++) {
    if (word.toLowerCase().startsWith(consonants[i])) {
      return true;
    }
  }
  return false;
}


const regex = 
// function punct(word) {
//   const punks = [".", ",", "!", "?", "-", ";", ":", "/"]
//   for (let i = 0; i < punks.length; i++) {
//     if (word.includes(punks[i])) {
//       return true;
//     }
//   }
//   return false;
// }


// Business Logic
// User Interface Logic