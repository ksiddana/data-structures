var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Declare an object to be returned
  var obj = {};

  //Declare a property for object that holds the size of the Queue
  obj.pSize = 0;

  //Decalare a variable to the headerAddress(frontOftheQueue) of teh Queue
  obj.frontOfTheQueue = 0;

  //Declare a storage variable for holding the items in the Queue
  obj.storage = {};

  //Declare the methods to be used for accessing the Queue
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;

};

var queueMethods = {};

// Define the Enqueue method
queueMethods.enqueue = function (value) {

  // Calculating the index after the last element in the Queue
  var backOfQueue = this.frontOfTheQueue + this.pSize;

  // Add new item to the back of the Queue
  this.storage[backOfQueue] = value;

  // Increment the size of the Queue
  this.pSize++;

};

queueMethods.dequeue = function() {

  //We don't want to dequeue an empty Queue
  if (this.pSize > 0) {

    // Save the value of the front item in the Queue
    var returnVal = this.storage[this.frontOfTheQueue];

    // Once we saved the value, we want to free it from the Queue
    this.storage[this.frontOfTheQueue] = undefined;

    // Move the Index of the front of the Queue to the next position
    this.frontOfTheQueue++;

    // Since, we've removed an item, we want to update the size of the Queue.
    this.pSize--;
      
    return returnVal;
  }



};

queueMethods.size = function() {
  console.log(this.pSize);
  return this.pSize;
};


