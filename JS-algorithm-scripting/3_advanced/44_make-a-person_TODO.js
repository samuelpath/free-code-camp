/*
  Fill in the object constructor with the following methods below:
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)
  Run the tests to see the expected output for each method.
  The methods that take an argument must accept only one argument and it has to be a string.
  These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return this.firstName;
  }

  this.getLastName = () => lastName;

  this.getFullName = () => `{this.firstName} {this.lastName}`;

  this.setFirstName = function(first) {
    this.firstName = first;
  };

  this.setLastName = function(last) {
    this.lastName = last;
  };

  this.setFullName = function(firstAndLast) {
    
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());