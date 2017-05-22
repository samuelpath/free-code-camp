/*
  Make a function that looks through an array of objects (first argument) 
  and returns an array of all objects that have matching property and value pairs (second argument).
  Each property and value pair of the source object has to be present in the object from the collection
  if it is to be included in the returned array.

  For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
  and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
  because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  const arr = [];
  
  const sourceKeys = Object.keys(source);
  
  for (let i = 0; i < collection.length; i++) {
    const obj = collection[i];
    let objToAdd = true;
    for (let j = 0; j < sourceKeys.length; j++) {
      const key = sourceKeys[j];
      if (!obj.hasOwnProperty(key) || (source[key] !== obj[key])) {
        objToAdd = false;
      }
    }
    
    if (objToAdd) {
      arr.push(obj);
    }
  }
  
  return arr;
}