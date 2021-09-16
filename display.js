// 1 Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

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
    display() {
        var liststr ="";
        if (this.head == null) {
            return liststr;
        }
        liststr += this.head.value;

        var runner = this.head.next;
        while (runner != null){
            liststr +="," + runner.value;
            runner = runner.next
        }
        return liststr
}
}
var mySLL = new SLL();
    console.log(mySLL.display);