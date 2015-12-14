var Stack = function() {

  this.pSize = 0;
  this.storage = {};
}

Stack.prototype.push = function(value){

  this.pSize++;
  this.storage[this.pSize] = value;

};

Stack.prototype.pop = function() {

  var result;

  if (this.pSize > 0) {
    result = this.storage[this.pSize];
    delete this.storage[this.pSize];
    this.pSize--;
  }

  return result;

};

Stack.prototype.size = function() {
  return this.pSize;
};
