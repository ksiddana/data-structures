var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.pSize = 0;
  this.frontOfTheQueue = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var backOfTheQueue = this.frontOfTheQueue + this.pSize;
  this.storage[backOfTheQueue] = value;
  this.pSize++;
};

Queue.prototype.dequeue = function() {

  var returnVal;

  if (this.pSize > 0) {

   returnVal = this.storage[this.frontOfTheQueue]; 
   this.storage[this.frontOfTheQueue] = undefined;
   this.frontOfTheQueue++;
   this.pSize--;

   return returnVal;
  }

   

};

Queue.prototype.size = function () {
  return this.pSize;
};


