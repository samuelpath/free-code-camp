/*
  Translate the provided string to pig latin.
  Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
  If a word begins with a vowel you just add "way" to the end.
  Input strings are guaranteed to be English words in all lowercase.
*/

function translateToPigLatin(strToTranslate) {
  let translatedStr = '';
  const intermediarySuffix = 'w';
  const finalSuffix = 'ay';
  
  if (isVowel(strToTranslate[0])) {
    translatedStr = strToTranslate + intermediarySuffix;
  } else {
    const initialStrChars = strToTranslate.split('');
    while (!isVowel(initialStrChars[0])) {
      initialStrChars.push(initialStrChars.shift(''));
    }
    translatedStr = initialStrChars.join('');
  }

  return translatedStr + finalSuffix;
}

function isVowel(c) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(c) !== -1;
}