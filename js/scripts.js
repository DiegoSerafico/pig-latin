function pigLatin(arguments) {
  const vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    if (arguments.startsWith(vowels[i])) {
      return true;
    }
  }
  return false;
}

pigLatin("a");

get first letter off of one word
includes(searchString, position)

if the first letter of the word === vowel[i]
then return true

split input into array with each word
use a for loop with charAt to identify if it starts with a vowel