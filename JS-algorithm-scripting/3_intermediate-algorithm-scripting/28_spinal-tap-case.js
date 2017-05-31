/*
  Convert a string to spinal case.
  Spinal case is all-lowercase-words-joined-by-dashes.
*/

const toSpinalCase = (str) => {
  str.replace(/[^a-zA-Z]/g, '-')
      .replace(/(?!^)([A-Z])/g, '-$1')
      .replace(/--/g, '-')
      .toLowerCase();
};