/*
  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTMLentities(str) {
  var mappings = [[/&/g, "&amp;"], 
                  [/</g, "&lt;"], 
                  [/>/g, "&gt;"], 
                  [/"/g, "&quot;"], 
                  [/'/g, "&apos;"]];

  mappings.forEach((mapping) => {
    str = str.replace(mapping[0], mapping[1]);
  })

  return str;
}