/*
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.

  First argument is the sentence to perform the search and replace on.
  Second argument is the word that you will be replacing (before).
  Third argument is what you will be replacing the second argument with (after).
  
  NOTE: Preserve the case of the original word when you are replacing it.
  For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function searchAndReplace(initialSentence, wordToReplace, replacementWord) {
  return initialSentence.replace(wordToReplace, replaceWithSameCase(wordToReplace, replacementWord));
}

function replaceWithSameCase(wordToReplace, replacementWord) {
  if (wordToReplace === wordToReplace.toLowerCase()) {
    return replacementWord.toLowerCase();
  } else if (wordToReplace === wordToReplace.toUpperCase()) {
    return replacementWord.toUpperCase();
  } else {
    // we assume that a word is either: lowercase, UPPERCASE or Propercase
    return replacementWord[0] + replacementWord.splice(1);
  }
}