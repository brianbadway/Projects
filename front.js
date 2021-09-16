// 1 Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// class SLLnode {//singly-linked list node class
//     constructor(val) {
//         this.value = val; // hold value of node
//         this.next = null; // next in list(pointer)
//     }
// }
// class SLL{ //singly-linked list class itself
//     constructor() { //will start with no nodes
//         this.head = null; //head points to first node
//     }
//     //all methods built in to class 
//     addFront(value) {
//         var newNode = new SLLnode(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//         }
// }
// var mySLL = new SLL();
// mySLL.addFront(10);
// mySLL.addFront(5)
// console.log(mySLL)

// 2 Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// class SLLnode {//singly-linked list node class
//     constructor(val) {
//         this.value = val; // hold value of node
//         this.next = null; // next in list(pointer)
//     }
// }
// class SLL{ //singly-linked list class itself
//     constructor() { //will start with no nodes
//         this.head = null; //head points to first node
//     }
//     //all methods built in to class 
//     removeFront(value) {
//         if (this.head == null){
//             return this.head;
//         }
//         var newNode = this.head;
//         this.head = removeNode.next;
//         removeNode = null;
//         return this.head;
//         }
// }
// var mySLL = new SLL();

// mySLL.removeFront();

// console.log(mySLL);

// 3 Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class SLLnode {//singly-linked list node class
    constructor(val) {
        this.value = val; // hold value of node
        this.next = null; // next in list(pointer)
    }
}
class SLL{ //singly-linked list class itself
    constructor() { //will start with no nodes
        this.head = null; //head points to first node
    }
    //all methods built in to class 
    front(value) {
        if (this.head == null){
            return this.head;
        } else{
            return thid.head.vlue;
        }
        var newNode = this.head;
        this.head = removeNode.next;
        removeNode = null;
        return this.head;
        }
}
