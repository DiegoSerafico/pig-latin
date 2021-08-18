Ui  - Collect user input
B  1. Separate userInput into an array
B  - recognize word starting with vowel
B  2. add "way" to the end of a word starting with vowel
B  3. Recognize if word begins with consonant
B  4. Remove all consonants from beginning and attach to the end of the word
B  5. Add ay after consonants
B    - qu words 
B  6. create string with array.prototype.join to make all the modified words into a string again
Ui  7. show final string to user 

Describe startVowel();

Test: "It recognizes a vowel."
Code: startVowel("a");
Expected Output: True

Test: "It recognizes first letter of word is vowel."
Code: startVowel("apple")'
Expected Output: True

Test: "It recognizes vowels in a word regardless of case.
Code: startVowel("Apple")'
Expected Output: True

Test: "It recognizes vowels in a word regardless of punctuation.
Code: startVowel("apple!")'
Expected Output: True

Test: "It should return false for an empty string."
Code: startVowel("");
Expected Output: false


Describe startConso();

Test: "It recognizes a consonant."
Code: startConso("b");
Expected Output: true

Test: "It recognizes the first string of letters in a word are consonants."
Code: startConso("younglings");
Expected Output: true

Test: "It recognizes consonants in a word regardless of case."
Code: startVowel("Younglings");
Expected Output: true

Test: "It recognizes consonants in a word regardless of punctuation."
Code: startVowel("younglings!!!!");
Expected Output: true

Test: "It should return false for an empty string."
Code: startVowel("");
Expected Output: false

Describe startQu();

Describe pigLatin();

Test: "It concatinates the string "way" to the end of the word if it starts with a vowel."
Code: startVowel("apple")'
Expected Output: "appleway"








Describe: vowelCounter();

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0




# _PROJECT NAME_

#### _EPICODUS PRACTICE: Sample one-sentence description_

#### By _**Ella Tanttu**_

## Technologies Used

* _CSS_
* _HTML_
* _JAVAscript_
* _Markdown_
* _Git Repositories_

## Description

_{Detailed description that explains the project and what concepts were being practiced.}_

## Setup/Installation Requirements

* _Navigate to https://github.com/url-path in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open DIRECTORYNAME/index.html in your browser_
* _Open index.html and styles.css in VS Code to edit_

## Known Bugs

_No known issues_

## License

_{MIT Copyright (c) 2021 Ella Tanttu}_

## Contact Information

_{Ella Tanttu ellajtanttu@gmail.com}_