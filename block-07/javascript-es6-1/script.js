// 1
function fatorialNumber(number) {
  if (number <= 1) {
    return number;
  } else {
    return number * fatorialNumber(number - 1);
  }
}

// 2
// Crie uma função que receba uma frase e retorne qual a maior palavra.

function longestWord(sentence) {
  let longest = '';

  if (sentence != undefined) {
    const words = sentence.split(' ', sentence.length);
    words.forEach((word) => {
      if (word.length > longest.length) {
        longest = word;
      }
    });
  }
  return longest;
}

function replaceX(newWord) {
  const sentence = 'Tryber x here! My five main skills are:';
  const newSentence = sentence.replace('x', newWord);
  return newSentence;
}

const abilities = [
  'Emotional control',
  'Perception',
  'Critical analysis',
  'Easy learning',
  'Good vision',
];

function myAbilies() {
  let listAbilites = replaceX('Pablo');
  abilities.forEach((abilitie) => {
    listAbilites += `\n${abilitie}`;
  });
  return listAbilites;
}

console.log(myAbilies());
