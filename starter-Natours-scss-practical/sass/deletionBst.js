class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

    class BinarySearchtree {
        constructor() {
            this.root = null;
        }
        remove(value){
            this.root = this.removeNode(this.root,value);
        }
        removeNode(current,value) {
            //base case when tree is empty 
            if(current === null) return current;

            if(value === current.value) {
                if(current.left === null && current.right === null) {
                    return null;
                }else if(!current.left) {
                    return current.right;
                }else if(!current.right) {
                    return current.left;
                }else {
                    let tempNode = this.getSuccessor(current.right);
                    current.value = tempNode.value;
                    //delete inorder successor 
                    current.right = this.removeNode(current.right,tempNode.value);
                     return current;
                }
            } else if(value < current.value){
                current.left = this.removeNode(current.left, value);
                return current;
            }else 
                current.right = this.removeNode(current.right,value);
                return current;
            }
    
        
        getSuccessor(current) {
            while(current.left !== null) {current = current.left;}
            return current;
        }
    }
   
