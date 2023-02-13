const srcTextTextArea = document.querySelector(
  "textarea#src-text"
) as HTMLTextAreaElement;

const resultTextTextArea = document.querySelector(
  "textarea#result-text"
) as HTMLTextAreaElement;

// Regular expression which matches any vowel
const vowelRegEx = /(e|i|o|u|a)/gi;

function update() {
  const srcText = srcTextTextArea.value.toLowerCase();
  const srcWords = srcText.split(" ");
  const resultWords = srcWords.map((word) => {
    // Is first character a vowel ?
    if (word.charAt(0).match(vowelRegEx)) {
      return `${word}yay`;
    } else {
      // Find index of the first vowel letter
      let vowelIndex = word.search(vowelRegEx);
      if (vowelIndex === -1) {
        if (word.length > 1) {
          vowelIndex = 0;
        } else {
          return word;
        }
      }
      return `${word.substring(vowelIndex)}${word.substring(0, vowelIndex)}ay`;
    }
  });
  resultTextTextArea.value = resultWords.join(" ");
}

// Update as user types
srcTextTextArea.addEventListener("keyup", update);
