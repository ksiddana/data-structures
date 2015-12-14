var Stack = function() {

  var obj = Object.create(stackMethods);

  obj.storage = {};
  obj.pSize = 0;

  return obj;
}

stackMethods = {};

stackMethods.push = function(value) {

  this.pSize++;
  this.storage[this.pSize] = value;

};

stackMethods.pop = function() {

  var result;

  if (this.pSize > 0 ){

    result = this.storage[this.pSize];
    delete this.storage[this.pSize];
    this.pSize--;
  }

  return result;

};

stackMethods.size = function() {

  return this.pSize;

};

