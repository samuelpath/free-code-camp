/*
  Return the length of the longest word in the provided sentence.
  Your response should be a number.
*/

function findLongestWordAmongTwo(word1, word2) {
  return (word1.length > word2.length) ? word1 : word2;
}

function findLongestWordInString(sentence) {
  const wordsInSentence = sentence.split(' ');
  const longestWord = wordsInSentence.reduce(findLongestWordAmongTwo, '');
  return longestWord.length;
}