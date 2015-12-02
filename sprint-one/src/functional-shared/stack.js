var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Declaring an Object to be retured
  var obj = {};

  //Declare a variable size for the stack
  obj.pSize = 0;

  // Store the elements in the stack
  obj.storage = {};

  // Functional Shared Pattern methods to be defined outside the Constructor
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;

  return obj;


};

// Define an Object that define the functions for the Stack Constructor
var stackMethods = {};


stackMethods.push = function(value) {
  
  //Store value at the top of the stack
  this.storage[this.pSize] = value;

  // Increament the size by 1
  this.pSize++;
};

stackMethods.pop = function() {

  //Declare a variable to store the top value of the stack
  var returnVal;
  
  // Check if there are items in the stack
  if (this.pSize > 0 ) {
    
    //When we remove an item, we want to decreament the size of the array
    this.pSize--;

    // Store the result of the top value in returnVal
    returnVal = this.storage[this.pSize];

    // Erase the top value from the Stack
    this.storage[this.pSize] = undefined;

    return returnVal; 
  }

};

stackMethods.size = function() {

  // return the size from the Constructor using "this"
  return this.pSize;
};

stack1 = new Stack();
stack1.pSize = 10;


