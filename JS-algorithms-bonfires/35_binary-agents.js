/*
  Return an English translated sentence of the passed binary string.
  The binary string will be space separated.
*/

const binSentenceToEnglish = (binSentence) => binSentence.split(' ').map(binWordToEnglish(binWord)).join('');

const binWordToEnglish = (binWord) => String.fromCharCode(parseInt(binWord, 2));