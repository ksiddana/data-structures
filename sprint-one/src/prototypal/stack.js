var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //prototypal doesn't have to use the word prototype.
  var obj = Object.create(stackMethods);
  // var obj = Object.create(Stack.constructor.prototype);

  //remember the number of elements
  obj.pSize = 0;

  //remember the elements themselves
  obj.storage = {};

  return obj;

};

var stackMethods = {};
// var stackMethods = Stack.constructor.prototype;

stackMethods.push = function(value){
  //store the new value at the top of the stack
  this.storage[this.pSize] = value;

  //update the size
  this.pSize++;
};

stackMethods.pop = function(){
  //make sure to to remove values from an empty stack
  if(this.pSize > 0){

    //update size first (0 indexed)
    this.pSize--;

    //store the value at the top of the stack
    var returnVal = this.storage[this.pSize];

    //free the value at the top of the stack
    this.storage[this.pSize] = undefined;

    return returnVal;
  }
};

stackMethods.size = function(){
  //spit out size!
  return this.pSize;
};
