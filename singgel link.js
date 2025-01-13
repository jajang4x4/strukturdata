class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Menambahkan node ke awal list (secara otomatis terurut terbalik)
    addAtBeginning(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Menampilkan semua data dalam list
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Contoh penggunaan
  const list = new LinkedList();
  list.addAtBeginning(20);
  list.addAtBeginning(30);
  list.addAtBeginning(40);
  
  list.printList();