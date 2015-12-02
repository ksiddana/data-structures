var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(Queue.prototype);

  
  obj.frontOfTheQueue = 0;
  obj.pSize = 0;

  obj.storage = {};
  return obj;

};

var queueMethods = {};

Queue.prototype.enqueue = function(value){
  var backOfTheQueue = this.frontOfTheQueue + this.pSize;
  this.storage[backOfTheQueue] = value;
  this.pSize++;
};

Queue.prototype.dequeue = function(){
  var returnVal;
  if(this.pSize > 0){
    returnVal = this.storage[this.frontOfTheQueue];
    this.storage[this.frontOfTheQueue] = undefined;

    this.frontOfTheQueue++;
    this.pSize--;

    return returnVal;
  }
};

Queue.prototype.size = function(){
  return this.pSize;
};

