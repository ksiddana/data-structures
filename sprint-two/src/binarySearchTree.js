var BinarySearchTree = function(value){

	var newTree = Object.create(binarySearchTreeMethods);
	newTree.value = value;

	newTree.left = null;
	newTree.right = null;
	
	/*	if (obj.root.left > obj.root) {
		obj.right = value;
	} else {
		obj.left = value;
	}*/

	return newTree;

};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(input) {

	console.log("Instance Calling the tree", this);
	
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
	}
	
	//
	recursiveCall(this);
	return found;

};

binarySearchTreeMethods.depthFirstLog = function() {

	//

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
