function LinkedList(){
}
LinkedList.prototype.add = function(element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = {
            value: element, next: null };
    }
}

LinkedList.prototype.remove = function(element) {
    let current = this;
    let prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}

LinkedList.prototype.printHelper = function(list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}

LinkedList.prototype.print = function() {
    let result = 'LinkedList{';
    result = this.printHelper(this, result); result += '}';
    console.log(result);
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //in the console, you should see: LinkedList{1,2,3}
linkedList.remove(2);
linkedList.print(); //in the console, you should see: LinkedList{1,3}


