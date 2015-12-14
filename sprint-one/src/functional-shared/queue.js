var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {};

  obj.storage = {};

  obj.removeIndex = 0;
  obj.insertIndex = 0;
  obj.pSize = 0;

  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

return obj;

};

queueMethods = {};

queueMethods.enqueue = function(value) {

  this.storage[this.insertIndex] = value;
  this.pSize++;
  this.insertIndex++;

};

queueMethods.dequeue = function() {
  
  var result;
  
  if (this.pSize > 0){

    result = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.pSize--;
    this.removeIndex++;
  }

  return result;

};

queueMethods.size = function() {

  return this.pSize;
};

