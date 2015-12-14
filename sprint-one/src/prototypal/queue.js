var Queue = function() {

  var obj = Object.create(queueMethods);

  obj.storage = {};
  obj.returnIndex = 0;
  obj.insertIndex = 0;
  obj.pSize = 0;

  return obj;
}

queueMethods = {};

queueMethods.enqueue = function(value) {

  this.storage[this.insertIndex] = value;
  this.pSize++;
  this.insertIndex++;

};

queueMethods.dequeue = function() {

  var result;

  if (this.pSize > 0) {
    result = this.storage[this.returnIndex];
    delete this.storage[this.returnIndex];
    this.pSize--;
    this.returnIndex++;
  }

  return result;

};

queueMethods.size = function() {

  return this.pSize;

};


