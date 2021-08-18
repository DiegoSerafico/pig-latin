function pigLatin(arguments) {
  let vowelWay = []
  let newArray = arguments.split(" ");
  const vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    if (newArray[i].startsWith(vowels[i])) {
       vowelWay.push(newArray[i] + "way");
      //  newArray = newArray[i] + "way";
      //  newArray.push(newArray[i] + "way");
    }
  }
  return newArray;
}

pigLatin("a");

get first letter off of one word
includes(searchString, position)

if the first letter of the word === vowel[i]
then return true

split input into array with each word
use a for loop with charAt to identify if it starts with a vowel