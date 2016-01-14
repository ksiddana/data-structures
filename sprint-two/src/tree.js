var Tree = function(value) {

  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
}

treeMethods = {};

treeMethods.addChild = function(value) {

  // if the tree does not exist, can't add a child.
  // if the tree exist, create a new tree as a child and also add it to the tree children array

  var child = Tree(value);
  this.children.push(child);

};

treeMethods.contains = function(target) {

  var found = false;

  var searchTreeElements = function(currentNode){

    if (currentNode.value === target) {
      found = true;
    }

    for (var i = 0; i < currentNode.children.length; i++) {

      var childTree = currentNode.children[i];
      searchTreeElements(childTree);
    }

  }

  searchTreeElements(this);
  return found;

};