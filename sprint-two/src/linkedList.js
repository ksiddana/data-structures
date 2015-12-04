var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = new Node(value);

    console.log("Adding Value to Tail: ", value);

    if (list.tail === null) {
      
      list.tail = node;
      if (list.head === null) {
        list.head = node;
        list.head.next = list.tail;
      }
    } else {
      var oldTail =  list.tail;
      list.tail = node;
      oldTail.next = node;  

    }
  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    delete oldHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    
    // Declare a variable that is assigned the to the Head element in the Linked List
    var node = list.head;

    // We want to loop through all the nodes, until there is no next 
    while(node) {

      // Check the target against the current node value
      if (node.value === target) {

        // If it finds the target return True.
        return true;
      }
      // *** Update the variable with the current node's NEXT value 
      node = node.next;
    }
    // If it didn't find the target in the all the nodes, return false
    return false;

  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
