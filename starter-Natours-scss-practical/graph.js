class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjancencyList[vertex]) {this.adjancencyList[vertex] =[]};
    }
    addEdge(v1,v2) {
        this.adjancencyList[v1].push(v2);
        this.adjancencyList[v2].push(v1);

    }
    removeEdge(v1,v2) {
        this.adjancencyList[v1] = this.adjancencyList[v1].filter(v => v!==v2 );
        this.adjancencyList[v2] = this.adjancencyList[v2].filter(v => v!==v1 );
    }
    removeVertex(vertex ) {
      
            while(this.adjancencyList[vertex].length) {
                 const adjacentNode = this.adjancencyList[vertex].pop();
                
                 this.removeEdge(vertex,adjacentNode);
            }
           
        
        delete this.adjancencyList[vertex];
    }

    dfsRecursive(start) {
        let visited = {};
        let nodeslist = [];
        const adjancencyList = this.adjancencyList;
        (function dfsRecursionhelper(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            nodeslist.push(vertex);
            adjancencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfsRecursionhelper(neighbor);
                }
            })
        })(start);
        return nodeslist;
    }

    dfsIterative(start) {
        let visited = {};
        let result = [];
        let stack = [start];
        let currentVertex;
        visited[start] = true;
        while(stack.length) {
          currentVertex = stack.pop();
          result.push(currentVertex);
            this.adjancencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    BFS(start) {
        let queue = [start];
        let visited = {};
        let result = [];

        while(queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjancencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor]= true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }

}

let g= new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A'	,'B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('D','E');
g.addEdge('E','F');
g.addEdge('D','F');
g.addEdge('C','E');

console.log(g.adjancencyList);


    console.log(g.dfsRecursive('A'));
    console.log(g.dfsIterative('A'));



class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    
    }

}
class BinarySearchTree {

    constructor(){
      this.root = null
    }
    
    // this function calls removeNode
    
    remove(value){
        this.root = this.removeNode(this.root, value)
    }
    // a recursive function to insert a new value in binary search tree
    
    removeNode(current, value) {
        
        // base case, if the tree is empty 
        
       if(current === null) return current
        
        // when value is the same as current's value, this is the node to be deleted
        
        if (value === current.value) {
             
            // for case 1 and 2, node without child or with one child
            
            if (current.left === null && current.right === null){
                
                    return null
                
                }else if(current.left === null){
                
                    return current.right 
             
                }else if(current.right === null){
                
                    return current.left
                
                }else{
                    
                    /// node with two children, get the inorder successor, 
                    //smallest in the right subtree
                    
                    let tempNode = this.kthSmallestNode(current.right)
                        current.value = tempNode.value
                    
                    /// delete the inorder successor
                    
                        current.right = this.removeNode(current.right, tempNode.value)
                    return current
            }

        // recur down the tree
            
        }else if(value < current.value) {
            
            current.left = this.removeNode(current.left, value)
            return current
            
        }else{
            
            current.right = this.removeNode(current.right, value)
            return current
        }
    }
    
     /// helper function to find the smallest node
    
    kthSmallestNode(node) {
        while(!node.left === null)
            node = node.left

        return node
    }

    
}