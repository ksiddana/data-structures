var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.pSize = 0;
  this.storage = {};

};

Stack.prototype.push = function (value) {

  this.storage[this.pSize] = value;
  this.pSize++;

};

Stack.prototype.pop = function () {

  var returnVal;

  if (this.pSize > 0) {

    this.pSize--;
    returnVal = this.storage[this.pSize];
    this.storage[this.pSize] = undefined;

    return returnVal;
  }

};

Stack.prototype.size = function () {
  return this.pSize;
};
