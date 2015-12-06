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

  var found = false;

  var searchTargetElement = function(node) {

    if (node.value === target) {
      found = true;
    }

    for (var i = 0; i < node.children.length; i++) {
      searchTargetElement(node.children[i]);
    }

  };

  searchTargetElement(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */