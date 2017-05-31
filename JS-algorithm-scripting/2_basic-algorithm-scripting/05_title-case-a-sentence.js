/*
  Return the provided string with the first letter of each word capitalized.
  Make sure the rest of the word is in lower case.
  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(sentence) {
  const wordsInInitialSentence = sentence.split(' ');
  const wordsInTitleCase = wordsInInitialSentence.map((word) => {
    const charsInWord = word.toLowerCase().split('');
    charsInWord[0] = charsInWord[0].toUpperCase();
    return charsInWord.join('');
  });
  return wordsInTitleCase.join(' ');
}