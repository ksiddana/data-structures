var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
    //size is how many elements are currently in the queue
    var size = 0;
    //headAddress stores the position of the start of the queue
    var headAddress = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    //0 indexed 

    //store the new value at the end of the queue
    //the end is at position 'headAddress plus the size'
    storage[size + headAddress] = value;
    
    //increment size
    size++;
  };

  someInstance.dequeue = function(){
    var nextInLine;

    //only dequeue if there are elements in the queue
    if(size > 0){
      //save the value to be dequeued
      nextInLine = storage[headAddress];

      //erase the value that is dequeued
      storage[headAddress] = undefined;

      //increment the front of the queue to the next position
      headAddress++;

      //since we removed the element, we reduce the size
      size--;

      //return the first value in the queue
      return nextInLine;
    }

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
