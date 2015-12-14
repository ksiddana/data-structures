// ###Graph Solution

// Instantiate a new graph
var Graph = function(){

  this.nodes = {};
};

var GraphNode = function(node) {
  
  this.edges = {};
  this.value = node;

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){

  var newNode = new GraphNode(node);
  this.nodes[node] = newNode;

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){

    // Declare a local variable for clarity
    var graphNodes = this.nodes;

    // Check the keys in the GraphNodes for the value
    for (var key in graphNodes){

      // Check the value of each Node and see if it equal to the node
      if (graphNodes[key].value === node){

        // Return true if the string is found in the key
        return true;
      }
    }

    // Else return false
    return false;
    // for (var key in)
    

};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  
  // Declare a local variable for clarity
  var graphNodes = this.nodes;

  // Iterate through the 
  for (var key in graphNodes) {
    if (graphNodes[key].value === node) {

      delete graphNodes[key];
      // console.log(this.obj);
    }
  }

  return false;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  // console.log(this.obj.f);
  return this.nodes[fromNode].edges[toNode] || false;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

  //
  this.nodes[fromNode].edges[toNode] = true;
  this.nodes[toNode].edges[fromNode] = true;
   
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var graphNodes = this.nodes;
  
  // If we use Objects we can refer to the graphNodes 
  graphNodes[fromNode].edges[toNode] = false;
  graphNodes[toNode].edges[fromNode] = false;
 
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback){

  var graphNodes = this.nodes;
  
  for (var key in graphNodes) {
    callback(graphNodes[key].value);
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */