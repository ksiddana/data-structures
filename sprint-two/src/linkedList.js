var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = new Node(value);
    console.log("This:", this);

    if (list.tail === null && list.head === null) {
      
      list.head = node;
      list.tail = node;

    } else {

      // Extend the list by, changing the last node label/reference to now refer to the new node
      list.tail.next = node;

      // Now you want the new node to be assigned as the tail.
      list.tail = node;
    }
  };

  list.removeHead = function(){
    
    // When the list is empty
    if (list.head === null) {
      return null;
    }

    // Before we reassign the label head to the next node in the list
    // we want to save a reference/label to the head, because that is what we
    // want to return
    var tempHead = list.head;

    // Reassigning the label/reference of head to the next node in the list
    list.head = list.head.next;

    // We also want to remove the reference to the list
    tempHead.next = null;

    // Return the value using the label stored earlier
    return tempHead.value;

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
