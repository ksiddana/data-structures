var Stack = function() {
  var someInstance = {};
  var pSize = 0;

  someInstance.push = function(value) {

    pSize++;
    someInstance[pSize] = value;

  }

  someInstance.pop = function() {

    var returnVal;
    // starting at index 0
    if (pSize > 0) {
        returnVal = someInstance[pSize];
        someInstance[pSize] = undefined;
        pSize--;        
    }
    return returnVal;
  };



  someInstance.size = function() {
    return pSize;
  }

  return someInstance;
}