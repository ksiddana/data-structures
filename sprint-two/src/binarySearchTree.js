var BinarySearchTree = function(value){

	var newTree = Object.create(binarySearhMethods);

	newTree.right = null;
	newTree.left = null;
	newTree.value = value;

	return newTree;
};

var binarySearhMethods = {};

binarySearhMethods.insert = function(node) {

	// We want to insert a new Tree using Functional Shared Instantiation pattern
	// First lets check the value of the current node, if it already exists we should
	// not be entering the node into the tree
	// If the node.value is > than the parent node Tree, we should insert the node as a tree
	// to the right of the tree

	if (this.value === node) {
		console.log("Value alredy Exists in the Binary Tree");
		return;
	}

	// If the tree's value is greater than the node being inserted, we want to created a
	// Left tree.
	if ( this.value > node ) {

		// Before we create a Left Tree, lets check if a Tree already exists there, if a 
		// Tree does not exist, lets create the Left Tree and assign to the left of the Parent
		// Tree.
		if (this.left === null) {
			this.left = BinarySearchTree(node);
		} else {
			// We want to recursively call insert, to check for where the tree is empty on the left
			// or the right and insert the node at the appropiate place.
			this.left.insert(node);
		}
	} else if ( this.value < node ) {

		// Before we insert the node, lets check if a right tree already exists, that means,
		// we have to go down that tree and find, its children and only then we can insert the 
		// value to the right or the left.

		if (this.right === null) {
			this.right = BinarySearchTree(node);
		} else {
			this.right.insert(node);
		}
	}

};

binarySearhMethods.contains = function(target) {

	var found = false;

	// if the value is found we want to exit from Recursion
	// Else, lets determine if the left of the tree is

	var searchBinaryTree = function(currentNode) {

		console.log(currentNode);

		// Base Case for exiting the Recursion
		if (currentNode.value === target) {
			found = true;
		}

		if (currentNode.value < target && currentNode.right !== null ) {
			searchBinaryTree(currentNode.right);
		}

		if (currentNode.value > target && currentNode.left !== null ) {
			searchBinaryTree(currentNode.left);
		}
	};

	searchBinaryTree(this);
	return found;

};

binarySearhMethods.depthFirstLog = function(callback) {

	var performCallBackOnEachNode = function(currentNode) {

		if (currentNode !== null){
			callback(currentNode.value);
		}

		if (currentNode.right !== null) {

			performCallBackOnEachNode(currentNode.right);
		}

		if (currentNode.left !== null) {
			performCallBackOnEachNode(currentNode.left);
		}

	};

	performCallBackOnEachNode(this);

};



