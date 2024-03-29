class Node{
    constructor(key,value,next){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

export default class linkedList{
    constructor(a){
        if(a){
            return alert('List was not created please create the list with no values! Only set values with append/prepend');
        }
        this.list = [];
        this.size = 0;
    }
    // Append will attach the node to the front of the list essentially making it the new head
    append(key,val){
        if (this.size > 0){
            let newNode = new Node(key,val);
            let oldHead = this.head();
            newNode.next = oldHead;
            this.list.unshift(newNode);
            //console.log('Finished adding to the list!')
            return ;
        }
        let newNode = new Node(key,val);
        this.list.unshift(newNode);
        //console.log('First node added!')
        return ;

    }
    // Prepend will attach the node to the end of the linked list essentially making it the new node that points to null.
    prepend(key,val){
        let newNode = new Node(key,val);
        if(this.size > 0){
            let before = this.tail();
            before.next = newNode;
            this.list.push(newNode);
            return;            
        }
        this.list.push(newNode);
        return;
    } 
    // len will return the size of the list in a variable.
    len(){
        return this.size;
    }
    // exists returns true or false true if a list exists and false if it does not.
    exists(){
        return this.size > 0;
    }
    // Head returns the head node or the first node in the list.
    head(){
        if(this.size > 0){
            return this.list[0];
        }
    }
    // Tail returns the last node before null.
    tail(){
        if(this.size > 0){
            return this.list[this.size-1];
        }
        return this.list
    }
    // locate returns the node at the passed index given.
    locate(idx){
        if (idx === null){
            return null;
        }

        if(this.size > 0){
            return this.list[idx];
        }else{
            console.log('List doesnt have anything set!')
            return null;
        }
    }
    // contains will return true if that value is in the list.
    contains(key){
        if(this.size > 0){
            for(let i = 0; i < this.size; i++){
                let position = this.list[i];
                if(position.key === key){
                    return true
                }
            }
            return false
        }
        //console.log('List is empty.');
        return;
    }
    // find will return the index the value is found at if it is found or return a console.log of not found and return.
    find(key){
       if(this.size > 0){
        for(let i = 0; i < this.size;i++){
            let position = this.list[i];
            if(position.key === key){
                return i;
            }
        }
        //console.log('Not found in current list.');
        return null;
       }
       //console.log('no keys found!')
       return;
    }
    // pop will remove the lasy element from the list.
    pop(){

    }
    // show will show the list in the console as a string to represent the list.
    show(){

    }
    // insertAt will allow you to pass a number and index and insert the value given at that index.
    insertAt(){

    }
    // removeAt will remove the node at the passed index.
    removeAt(){

    }
}
