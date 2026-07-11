function MyLinkedList(){
    this.head=null;
    this.size=0;
}

const list=new MyLinkedList();
console.log(list);
function Node(val){
    this.val=val;
    this.next=null;
}

MyLinkedList.prototype.addAtHead=function(val){
    const newNode= new Node(val);
    newNode.next=this.head;
    this.head=newNode;
    this.size++;
}

list.addAtHead(3);
console.log(list);


MyLinkedList.prototype.addAtTail=function(val){
    const newNode= new Node(val);
    if(this.head===null) {
        this.head=newNode;
        this.size++;
        return;
    }
    let curr=this.head;
    while(curr.next!=null) curr=curr.next;
    curr.next=newNode;
    this.size++;
}

list.addAtTail(4);
console.log(list);

MyLinkedList.prototype.get=function(ind){
    if(ind>=this.size) return -1;
    let curr=this.head;
    for(let i=0;i<ind;i++){
        curr=curr.next;
    }
    return curr.val;
}

console.log(list.get(0));

MyLinkedList.prototype.addAtIndex=function(ind,val){
    if(ind>this.size) return;
    if(ind===0) this.addAtHead(val);
    else if(ind===this.size) this.addAtTail(val);
    
    else{
        const newNode= new Node(val);
        let curr=this.head;
        for(let i=0;i<ind-1;i++){
            curr=curr.next;
        }
        let temp=curr.next;
        curr.next=newNode;
        newNode.next=temp;
        this.size++;
    }
}

list.addAtIndex(1,2);
console.log(list);

MyLinkedList.prototype.deleteAtIndex=function(ind){
    if(ind>=this.size) return;
    let curr=this.head;
    if(ind===0){
        this.head=curr.next;
        this.size--;
        return;
    }
    
    for(let i=0;i<ind-1;i++){
        curr=curr.next;
    }
    let temp=curr.next.next;
    curr.next=temp;
    this.size--;
}

list.deleteAtIndex(2);
console.log(list);