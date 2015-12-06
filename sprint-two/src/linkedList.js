var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = new Node(value);

    if (list.tail === null && list.head === null) {
      
      list.head = node;
      list.tail = node;

    } else {

      // Extend the list by, changing the last node label/reference to now refer to the new node
      // The next, value are both just variables, one holding a value
      // one holding the address of the next node. so 0x000FFF (Node)
      // Let's say 000 = value, FFF = Address of the next object reference (NEXT).
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
    
    var found = false;

    var findLinkedList = function(node) {

      // Find the value here
      if (node.value === target) {
        found = true;
      } 
      // Condition for when we want to recursively call on the nodes
      if (node.next && !found) {

        findLinkedList(node.next);
      }
    }

    findLinkedList(this.head);
    return found;
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
