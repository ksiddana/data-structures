var Queue = function() {

  this.storage = {};
  this.pSize = 0;
  this.insertIndex = 0;
  this.removeIndex = 0;

};

Queue.prototype.enqueue = function(value){

  this.storage[this.insertIndex] = value;
  this.pSize++;
  this.insertIndex++;

};

Queue.prototype.dequeue = function() {
  
  var result;
  
  if (this.pSize > 0) {

    result = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.pSize--;
    this.removeIndex++;
  }

  return result;
};


Queue.prototype.size = function() {
 return this.pSize; 
};