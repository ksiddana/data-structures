var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  //var obj = Object.create(queueMethods.constructor.prototype);

  obj.frontOfTheQueue = 0;
  obj.pSize = 0;

  obj.storage = {};
  console.log(obj);
  return obj;

};
var queueMethods = {};
//var queueMethods = Queue.constructor.prototype;

console.log("1",queueMethods);
queueMethods.enqueue = function(value){
  var backOfTheQueue = this.frontOfTheQueue + this.pSize;
  this.storage[backOfTheQueue] = value;
  this.pSize++;
};

queueMethods.dequeue = function(){
  var returnVal;
  if(this.pSize > 0){
    returnVal = this.storage[this.frontOfTheQueue];
    this.storage[this.frontOfTheQueue] = undefined;

    this.frontOfTheQueue++;
    this.pSize--;

    return returnVal;
  }
};

queueMethods.size = function(){
  return this.pSize;
};

console.log("2",queueMethods);


