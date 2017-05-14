
function findLongestWord(str) {
  const wordsInString = str.split(' ');
  
  const longestWord = wordsInString.reduce((acc, cur) => {
	if (cur.length > acc.length) {
		return cur;
	} else {
		return acc;
	}
  }, '');

  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
