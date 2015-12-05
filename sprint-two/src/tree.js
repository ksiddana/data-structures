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
    var parentNode = this;

    for (var i = 0; i < parentNode.children.length; i++) {
      var firstChild = parentNode.children[i]
      
      if (firstChild.value === target) {
        // console.log("First Level Node: ", firstChild.value);
        return true;
      } else if (firstChild.children) {
          
          for (var j = 0; j < firstChild.children.length; j++) {
                if (firstChild.children[j].value === target) {
              return true;
            }
          }
      }

      
    }
    return false;  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */