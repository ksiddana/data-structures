var Queue = function() {
  var someInstance = {};
  var pSize = 0;
  var frontOfTheLine = 0;

  someInstance.enqueue = function(value) {

    // When we want to put an item in the Queue
    // We want to increment the size
    // Add the item to the last element in the Queue
      someInstance[pSize + frontOfTheLine] = value;
      pSize++;
  };

  someInstance.dequeue = function() {
    var result;

    if (pSize > 0) {

      result = someInstance[frontOfTheLine];
      someInstance[frontOfTheLine] = undefined;
      pSize--;
      frontOfTheLine++;
    }

    return result;

  };

  someInstance.size = function() {
    return pSize;

  };

  return someInstance;
}