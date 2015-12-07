var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v){

  var idx = getIndexBelowMaxForKey(k, this._limit);

  // Initally the values in the Hash Table are all undefined
  // If you encounter an index that is empty and you want to insert and
  // element, you have to put it in a bucket, you can't just put the tuple in the bucket

  
  // Retrieve the bucket for the given index
  var bucket = this._storage.get(idx);
  
  // if the bucket does not exist, create it
  if (!bucket) {
    bucket = [];
    this._storage.set(idx, bucket);
  }

  // You only want to update the bucket, if the key was not found
  // So we need to keep track, when we're iterating through the bucket,
  // weather we found the key or not, if not, make a new bucket and push a tuple in there.
  var found = false;

  // Iterate of the bucket
  for (var i = 0; i < bucket.length; i++) {

    //Store the value of the bucket in the tuple
    var tuple = bucket[i];

    // Check for the key? if the key exist
    if (tuple[0] === k) {
      
      // Update the value in the tuple at position 1
      tuple[1] = v;

      // Set found to true indicating that the bucket has a key
      found = true;
      return;
    }
    
  } // end of iterating over the bucket

  //if the key does not exist
    if (!found) {

      // Insert a new tuple    
      bucket.push([k,v]);
    }
};

HashTable.prototype.retrieve = function(k){
  
  var idx = getIndexBelowMaxForKey(k, this._limit);

  // Initally the values in the Hash Table are all undefined
  // If you encounter an index that is empty and you want to insert and
  // element, you have to put it in a bucket, you can't just put the tuple in the bucket
  
  // Always going to retrieve a bucket for the given index
  var bucket = this._storage.get(idx);
  
  // if the bucket does not exist, return null
  if (!bucket) {
    return null;
  }

  // If we have a bucket at that index, iterate of the bucket
  for (var i = 0; i < bucket.length; i++) {

    //Store a temporary reference to the bucket as a tuple
    var tuple = bucket[i];

    // Check for the key? if the key exist
    if (tuple[0] === k) {

      // return the value at position 1 for the tuple
      return tuple[1];
    }
    
  } // end of iterating over the bucket

  // If we go through the whole thing, and don't find a value for our given
  // key we return null
  return null;
};

HashTable.prototype.remove = function(k){

  // Calcualte the index for the given key
  var idx = getIndexBelowMaxForKey(k, this._limit);

  // Lets retrieve our bucket again for that index
  var bucket = this._storage.get(idx);

  // Iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {

    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }

  // If you don't have the key you want to return null
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
