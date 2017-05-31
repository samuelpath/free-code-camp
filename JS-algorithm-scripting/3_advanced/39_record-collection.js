/*
  You are given a JSON object representing a part of your musical album collection.
  Each album has several propertyerties and a unique id number as its key. Not all albums have complete information.
  Write a function which takes an album's id (like 2548), a propertyerty property (like "artist" or "tracks"),
  and a value (like "Addicted to Love") to modify the data in this collection.
  If property isn't "tracks" and value isn't empty (""), update or set the value for that record album's propertyerty.
  Your function must always return the entire collection object.
  There are several rules for handling incomplete data:
  If property is "tracks" but the album doesn't have a "tracks" propertyerty, create an empty array before adding the new value to the album's corresponding propertyerty.
  If property is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
  If value is empty (""), delete the given property propertyerty from the album.

  Example of collection:
    var collection = {
        "2548": {
          "album": "Slippery When Wet",
          "artist": "Bon Jovi",
          "tracks": [ 
            "Let It Rock", 
            "You Give Love a Bad Name" 
          ]
        },
        "2468": {
          "album": "1999",
          "artist": "Prince",
          "tracks": [ 
            "1999", 
            "Little Red Corvette" 
          ]
        },
        "1245": {
          "artist": "Robert Palmer",
          "tracks": [ ]
        },
        "5439": {
          "album": "ABBA Gold"
        }
    };
*/

function updateRecords(id, property, value) {
  const collectionItem = collection[id];
  if (property === "tracks") {
    if (!collectionItem.hasOwnProperty("tracks")) {
      collectionItem.tracks = [];
    }
    if (value) {
      collectionItem[property].push(value);
    } else {
      delete collectionItem.tracks;
    }
  } else {
    if (value) {
      collectionItem[property] = value;
    } else {
      delete collectionItem[property];
    }
  }
  return collection;
}