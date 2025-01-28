class Graph {
    constructor() {
        this.adjancencyList = [];
    }
    addVertex(v1) {
        if(!this.adjancencyList[v1])this.adjancencyList[v1] =[];
    }
    addEdge(v1,v2,weight) {
        this.adjancencyList[v1].push({node:v2,weight});
        this.adjancencyList[v2].push({node: v1,weight});
    }
    Dijkstra(start,finish) {
        const distances = {};
        const nodes = new PriorityQueue();
        const previous = {};
        let path = [];
        let smallest;
        for(let vertex in this.adjancencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            }else {
                distances[vertex] = Infinity;
            }
            previous[vertex]= null;
        }
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                while(previous[smallest]!== null) {
                    path.push(smallest);
                    smallest=previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !==Infinity) {
                for(let neighbor of this.adjancencyList[smallest]) {
                    console.log(neighbor);
                    let nextNode = neighbor;
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                     if(distances[nextNeighbor] > candidate) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor,candidate); 
                     }
                }
            }
        }
        return path.concat(start).reverse();
    }
    
}

class  PriorityQueue {
    constructor() {
        this.values = [];
    }

enqueue(value,priority) {
    const node = new Node(value,priority);
    this.values.push(node);
    this.bubbleUp();
}
  bubbleUp() {
     let idx = this.values.length-1;
     let element = this.values[idx];
     while(idx> 0) {
        let parentIdx = Math.floor((idx-1)/2);
        let parent = this.values[parentIdx];
        if(parent.priority <= element.priority) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
     }
  }

  dequeue() {
    let min = this.values[0];
     let end = this.values.pop();
     if(this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
     }
     return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    let element = this.values[idx];
    while(true) {
        let leftIdx = 2*idx +1;
        let rightIdx = 2*idx+2;
        let swap = null;
        let left,right;
        if(leftIdx < length) {
            left = this.values[leftIdx];
            if(left.priority < element.priority) {
                swap = leftIdx;
            }
        }
        if(rightIdx < length) {
            right = this.values[rightIdx];
            if((swap === null && right.priority < element.priority)
                ||(swap !== null && right.priority <left.priority))  {
                    swap = rightIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
    }
  }
}
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     enqueue(val, priority) {
//         this.values.push({val,priority});
//         this.sort();
//     } 
//     dequeue() {
//         return this.values.shift();
//     }
//     sort() {
//         this.values.sort((a,b) => a.priority - b.priority);
//     }
// }


var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");
