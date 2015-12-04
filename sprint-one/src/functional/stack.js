/*var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Keeping track of number of items
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    //stack is 0 indexed

    //adding element to top of stack
    storage[size] = value;

    //increment size when we push a value onto stack
    size++;

  };

  someInstance.pop = function(){
    var returnVal;

    //make sure size does not go negative
    if(size > 0){

      //decrement size
      size--;

      //save top value
      returnVal = storage[size];

      //erase top value
      storage[size] = undefined;
      
      return returnVal;
    }

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
*/

var Stack = function() {
  
  var someInstance = {};

  var pSize = 0;

  someInstance.push = function(value) {
    pSize++;
    someInstance[pSize] = value;

  };

  someInstance.pop = function() {
    var returnVal;

    if (pSize > 0) {

      returnVal = someInstance[pSize];
      someInstance[pSize] = undefined;

      pSize--;        
    }

    return returnVal;

  };

  someInstance.size = function() {
    return pSize;

  };

  return someInstance;
};