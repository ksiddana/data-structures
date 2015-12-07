var BinarySearchTree = function(value){

	var newTree = Object.create(binarySearchTreeMethods);
	newTree.value = value;

	newTree.left = null;
	newTree.right = null;

	return newTree;

};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(input) {

	// console.log("Instance Calling the tree", this);
	
	if (this.contains(input)) {
		console.log("Already Contains");
	} else {

		var that = this;

		var findingWhereToInsert = function(parentValue) {

		if (input < parentValue.value) {
		// If the input tree value is less than the parent Value
		// We want to make a Left Tree

			if (parentValue.left === null) {

				parentValue.left = BinarySearchTree(input);

			} else {
				
				findingWhereToInsert(parentValue.left)
			}

		} else if (input > parentValue.value) {
		// If the input value is greater than the Parent Value
		// We want to make a Right Tree.

			if (parentValue.right === null ) {
				
				parentValue.right = BinarySearchTree(input);
					
			} else {

				findingWhereToInsert(parentValue.right);
			}			
		} 
	}
		
	findingWhereToInsert(this);

	}

};

binarySearchTreeMethods.contains = function(input) {

	var found = false;

	var recursiveCall = function(node) {

		if (node.value === input) {
			found = true;
		}

		if (node.right !== null && node.value < input ) {
			recursiveCall(node.right);
		}

		if (node.right !== null && node.value > input ) {
			recursiveCall(node.left);
		}
	};

	// This will start the recursion through the entire linked list.
	recursiveCall(this);
	return found;

};

binarySearchTreeMethods.depthFirstLog = function(callback) {

	// Pass a callback to the depthFirstLog
	// Method that accepts a callback
	// executes it on every value contained in the tree
	// Pass in the this value
	// Perform the callback function on every element of the tree
	
	var recursiveOnEveryElement = function(node) {

		console.log("recursing");

		if (node) {
			callback(node.value);
		}
		
		if (node.right !== null) {
			recursiveOnEveryElement(node.right);
		}

		if (node.left !== null) {
			recursiveOnEveryElement(node.left);
		}
	}
	recursiveOnEveryElement(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
