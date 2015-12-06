var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;

};

var setPrototype = {};

setPrototype.add = function(item){

	// Add the item to the set storage variable using the item as the key and the value
	// this refers to the set object of class Set, so now we can directly access _.storage
	this._storage[item] = item;
};

setPrototype.contains = function(item){

	// Check the object's storage property for a key with the value of the item
	// if the item is found, return true else break out of the for loop and return false
	for (var key in this._storage) {
		if (this._storage[key] === item) {
			return true;
		}
	}
	// break out of the for loop and return false
	return false;
};

setPrototype.remove = function(item){

	for (var key in this._storage) {
		if (this._storage[key] === item) {

			// if the object's instance contains the item, set its value to undefined
			this._storage[key] = undefined;
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
