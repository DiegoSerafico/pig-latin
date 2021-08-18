// Utility Logic
function startsWithVowel(word) {
  const vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    if (word.toLowerCase().startsWith(vowels[i])) {
      return true;
    }
  }
  return false;
}

function punct(word) {
  const punks = [".", ",", "!", "?", "-", ";", ":", "/"]
  for (let i = 0; i < punks.length; i++) {
    if (word.includes(punks[i])) {
      return true;
    }
  }
  return false;
}

startVowel("a");

// Business Logic
// User Interface Logic