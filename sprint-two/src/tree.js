var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

  // your code here

var treeMethods = {};

treeMethods.addChild = function(value){  
//goal: add node object to children array of parent

  //create new node
  //let value argument equal a property in node object 
  var newNode = Tree(value);
    //push into children array of parent
  this.children.push(newNode);
};

treeMethods.contains = function(target){
  //goal: search recursively through tree to find target and tell us if it is in the 
  //tree or not  

  // Define a closure variable so that we return this value, we can manipulate the
  // value of found inside the function and then return it outside.
  var found = false;

  // Define a closure function to be called recursively on the current node
  var searchTargetElement = function(node) {

    // This is the condition that should that finds the element. This tree search
    // finds the element throughout the tree, it doesn't stop, when the element is found
    // it goes through the entire tree
    if (node.value === target) {
      found = true;
    }

    // Go through all the node children, the node.children.length is the base condition
    // that allows the function to stop and return to the above function.
    for (var i = 0; i < node.children.length; i++) {
      searchTargetElement(node.children[i]);
    }

  };

  // this function starts the recursion call to the node, that takes in the MOST important
  // parameter, you have to specifiy the node, what is it? the Tree, the DOM, the children, this.
  searchTargetElement(this);

  // Since, we were able to manipulate the value of found inside the closure function, we can now return the value
  // of found.
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */