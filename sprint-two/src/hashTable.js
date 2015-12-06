var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);

  // First insert the value
  // If another value is inserted with the same key
  // Create a sub array

  if (this._storage[i] !== undefined) {
  
    for (var j = 0; j < this._storage[i].length; j++) {
      // console.log(this._storage[i]);
      // console.log("Return that the element is in the Collision Array");
      
      if (this._storage[i][j] === k) {
        // Overwrite 
        this._storage[i][j+1] = v;
 
      } else {
        this._storage[i].push(k,v);  
      }

      return false;
    }
  } 
  else {  
      this._storage[i] = [k,v];
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[i] !== undefined) {

    for (var j = 0; j < this._storage[i].length; j++) {

        if (this._storage[i][j] === k) {
          // console.log("Key:", )
          return this._storage[i][j+1];
        }
    }
  } else {

    return this._storage[i];
  }
  // return this._storage[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[i] !== undefined) {

    for (var j = 0; j < this._storage[i].length; j++) {

      if (this._storage[i][j] === k) {


        this._storage[i][j+1] = null;        
        // console.log(this._storage[i][j]);
      }
    }
  }

  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
