/*
	Reverse the provided string.
	You may need to turn the string into an array before you can reverse it.
	Your result must be a string.
*/

let reverseString = (str) => { str.split('').reverse().join(''); };

reverseString("hello");