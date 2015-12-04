var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = new Node(value);

    console.log(value);

    if (list.tail === null) {
      //console.log('adding tail: ', value);
      list.tail = node;
      if (list.head === null) {
        //console.log('adding head: ', value);
        list.head = node;
        list.head.next = list.tail;
      }
    } else {
      //console.log('seeing tail is occupied');
      var oldTail =  list.tail;
      list.tail = node;
      oldTail.next = node;  
      //console.log('added to tail: ', list.tail.value);
      //console.log('checking head: ', list.head.value);
    }
    //console.log(list);
  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    delete oldHead;
    return oldHead.value;
  };

  list.contains = function(target){
    //debugger;
    //iterate through every object in list object
    /*
    1. 

    if (list.head.value === target) {
      console.log('true');
      return true;
    } else if (list.head.next === target) {

      console.log('true2');
      return true;
    } else {
        var lastNode = list.head.next;
        //lastNode.contains(target);
    } 
    //if it has a VALUE property, check that value against TARGET
        //if(value in list) {
    //if VALUE is equal to target
          //console.log('has value')
    //otherwise continue through list
    
    //if it hasn't returned true yet after going through list, return FALSE
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


var node1 = new Node();

/*
 * Complexity: What is the time complexity of the above functions?
 */
