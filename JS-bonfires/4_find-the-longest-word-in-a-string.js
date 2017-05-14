/*
	Return the length of the longest word in the provided sentence.
	Your response should be a number.
*/

function findLongestWord(word1, word2) {
	return (word1.length > word2.length) ? word1 : word2;
}

function findLongestWord(sentence) {
  const wordsInSentence = sentence.split(' ');
  const longestWord = wordsInSentence.reduce(getTheLongestWord, '');
  return longestWord.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
