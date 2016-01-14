// ###Graph Solution

// Instantiate a new graph
var Graph = function() {

  this.nodes = {};
}

var GraphNode = function(node) {

  this.value = node
  this.edges = {};
}

Graph.prototype.addNode = function(node) {

  var newNode = new GraphNode(node);
  this.nodes[node] = newNode;

};

Graph.prototype.contains = function(node) {

  var graphNodes = this.nodes;


  for (var key in graphNodes) {
    if (graphNodes[key].value === node) {
      return true
    }
  }

  return false;

};

Graph.prototype.removeNode = function(node) {

  var graphNodes = this.nodes;

  for (var key in graphNodes) {
    if (graphNodes[key].value === node) {
      delete graphNodes[key];
    }
  }

  return false;

};

Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this.nodes[fromNode].edges[toNode] || false;

};

Graph.prototype.addEdge = function(fromNode, toNode) {

  var graphNodes = this.nodes;

  graphNodes[fromNode].edges[toNode] = true;
  graphNodes[toNode].edges[fromNode] = true;

};

Graph.prototype.removeEdge = function(fromNode, toNode) {

  var graphNodes = this.nodes;

  graphNodes[fromNode].edges[toNode] = false;
  graphNodes[toNode].edges[fromNode] = false;


};

Graph.prototype.forEachNode = function(callback) {

  for (var key in this.nodes) {
    callback(this.nodes[key].value);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */