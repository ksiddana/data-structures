// ###Graph Solution

// Instantiate a new graph
var Graph = function(){

  this.obj = {
    // edges: []
  };

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){

  this.obj[node] = [];

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  
  for (var key in this.obj) {
    if (key === node) {
      	return true;
    } else if (key !== node) {
      	return false;
    } 
  };

  if (!this.obj.hasOwnProperty(node)) {
    	return false;
  };


};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){

  for (var key in this.obj) {
    if (key === node) {
       // this.obj[key] = undefined;
       delete this.obj[key];
    }
  }
  

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  for (var key in this.obj) {
    if (key === fromNode) {
      for (var i = 0; i <= this.obj[key].length; i++) {
        if (this.obj[key][i] === toNode) {
          return true;
        } else {
          return false;
        }
      }
    }
  }


};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

    for (var key in this.obj) {

	    if (key === fromNode) {
	      this.obj[fromNode].push(toNode);
	    }

	    if (key === toNode) {
	      this.obj[toNode].push(fromNode);
	    }
  	}

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  //iterate through the graph object 
  for (var key in this.obj) {
    //if fromNode is in this object
    if (key === fromNode) {
      //iterate through the fromNode 
      for (var i = 0; i<this.obj[fromNode].length; i++) {
        //find the toNode inside fromNode's edges array
        if ( this.obj[fromNode][i] === toNode) {
          //delete the toNode from fromNode's edges array
          this.obj[fromNode].splice(i, 1);
        }
      }
    }
    
    //find toNode array in the obj graph
    if (key === toNode) {
      //iterate through the toNode's edges array
      for (var j = 0; j<this.obj[toNode].length; j++){
        //find fromNode in the toNode's edges array
        if (this.obj[toNode][j] === fromNode) {
          //delete fromNode in toNode's edges array
          this.obj[toNode].splice(j, 1)
        }  
      }
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback){

  for (var key in this.obj) {
    callback(key);
  }

/*  var recursiveCallOnGraphNode = function(node) {

    console.log("Recursion: ", node);

    if (node) {
      callback(node.obj);
    }

    if (node !== null) {
      recursiveCallOnGraphNode(node.)
    }

  }

  recursiveCallOnGraphNode(this);*/
};


/*
 * Complexity: What is the time complexity of the above functions?
 */