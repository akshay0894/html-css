class MaxBinaryHeap {
    constructor() {
        this.values =[];
    }

    insert(value) {
       this.values.push(value);
       this.bubbleUp;
    }
    bubbleUp() {
        const index =  this.values.length -1;
        const parentIndex = Math.floor((index-1)/2);
        while( index > 0 ) {
            if(this.values[index] <= this.values[parentIndex]) break;
            let temp = this.values[index];
              this.values[index] = this.values[parentIndex];
             this.values[parentIndex] = temp;
             index = parentIndex;
        }
    }

    //extractMax
    /**
     * swap the first and last node of heap 
     *  remove the last element from heap 
     * call sinkdown function 
     * return last node 
     * 
     * sinkDown
     * set parent index with 0 
     * find the index of left childe- 2*index +1 (out bound cond)
     * find index of right child - 2*index +2(outbound cond)
     * if left child or right is greeater than element sawp if both are gretaer swap with the largest 
     * set the  child index swapped to parent index
     * keep looping and swapping unitl neither child is larger than element 
     * 
     */
    extractMax() {
        const max = this.values[0];
        const last = ths.values.pop();
        if(this.values.length > 0) {
            this.values[0] = last;
            this.sinkDown();
        }
      
         return max;
    }
    sinkDown() {
       let idx = 0;
       let elemnt = this.values[0];
       let length = this.values.length;
    
       while(true) {
        let left, right;
        let swap = null;
         let leftIdx = 2*idx +1;
         let rightIdx = 2*idx+2;
         left = this.values[leftIdx];
         right = this.values[rightIdx];
         if(leftIdx < length) {  
             if(left > elemnt) {
                swap = leftIdx;
             }
         }
         
         if(rightIdx < length) {
            if((swap === null && right > elemnt ) || (swap !== null && right > left )) {
                swap = rightIdx;
            }
         }
         if(swap=== null)break;
          this.values[idx] = this.values[swap];
          this.values[swap] = elemnt;

          parentIndex = swap;
         
       }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this. priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enQueue(value, priority) {
        const node = new Node(value, priority);
        this.values.push(node);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
       let element = this.values[index];

         while(true) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parent];
             if(parent.priority <= element.priority) break;
             this.values[parent] = element;
             this.values[index] = parent;
             index = parentIndex;
         }

    }

    dequeue() {
        const min = this.values[0];
        const last = this.values.pop();
        if(this.values.length) {
            this.values[0] = last;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let element = this.values[0];
         let length = this.values.length;
        let idx = 0;
        let left,right ,leftIdx, rightIdx;
        let swap = null;
        while(true) {
             leftIdx  = 2*idx +1;
             rightIdx = 2*idx +2;
               if(leftIdx < length) {
                 left = this.values[leftIdx];
                 if(left.priority < element.priority) {
                    swap = leftIdx;
                 }
               }
               if(rightIdx < length) {
                right = this.values[rightIdx];
                    if(( swap === null && right.priority < element.priority ) 
                        ||(swap !== null && right.priority < left.priority)){
                        swap = rightIdx;
                    }
               }
               if(!swap) break;
               this.values[idx] = this.values[swap];
               this.values[swap] = element;
               idx = swap;
        } 

    }

}

function merge(left,right) {
    let result = [];
    let i  = 0;
    let j =0;
    while(i< left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i])
            i++;
        }else {
            result.push(right[j]);
            j++
        }
    }
    while(i< left.length) {
        result.push(left[i]);
    }
    while(j< right.length) {
        result.push(right[j]);
    }
    return result
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let length = arr.length;
    let mid = math.floor(length/2);
    let left =  mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
     return merge(left,right);
}

function swap(arr, i ,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
}

function pivot(arr,start,end) {
    let pivot = arr[start];
    let swapIdx = left;
    for(let i = start+1; i<=end ;i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quicksort(arr, left = 0,right = arr.length-1 ) {
    if(left < right) {
        let pivotIdx = pivot(arr,left,right);
        quicksort(arr,left,pivotIdx-1);
        quicksort(arr,right,pivotIdx+1);
    }
    return arr;
}

/*steps - 
- create frequency object for both arrays 
- first check length if not equal return false 
-  loop through first array 
  - check frequency of the element in array and sqaure of the element in array 
    - if smae , continue 
    - else return false 
  - 
*/

function same(arr1, arr2) {
    let length1 = arr1.length;
    let length2 = arr2.length;
    if(length1 !== length2) {
        return false;
    }
    let fq1 = {};
    let fq2 = {};
    for(let item of arr1) {
        fq1[item] = (fq1[item] || 0)+ 1;
    }
    for(let item of arr2) {
        fq2[item] = (fq2[item] || 0)+ 1;
    }
    for(let item of arr1) {
        if(fq1[item] !== fq2[item**2]) {
            return false;
        }
    }

    return true;

}


function averagePair(arr,avg){
    let i = 0; 
    let j = arr.length-1;
        while(i<j) {
            if((arr[i]+arr[j]/2)===avg) {
                return true;
            }else if((arr[i]+arr[j]/2) > avg ){
                j--;
            }else {
                i++;
            }

        }
        return false;
       // add whatever parameters you deem necessary - good luck!
  }


  function minSubArrayLen(arr,sum) { 
   let start = 0;
   let end = 0;
   let total =0;
   let minLength = Infinity;
   while(start < arr.length) {
    if(total < sum && end < arr.length) {
        total+= arr[end];
        end++;
    }else if(total >= sum) {
        minLength = math.min(minLength, end-start);
        total -= arr[start];
        start++;

    }else { break;}
   }
   return minLength === Infinity ? 0 : minLength;

  }