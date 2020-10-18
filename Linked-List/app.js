/** @format */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Let's create a linked list with the class we just created. First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2.

const n1 = new Node(100);
const n2 = new Node(2);
const n3 = new Node(400);

n1.next = n2;
n2.next = n3;
n3.next = new Node(220);

// console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Create a list
  createList(data) {
    this.head = data;
  }

  //   Insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last Node
  insertLast(data) {
    let node = new Node(data);

    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
  // Insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print List Data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // This method empties out the list
  clear() {
    this.head = null;
  }

  // Get last Node
  getLast() {
    let lastNode = this.head;

    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  // Remove node
  remove(index) {
    // special cases: empty list or invalid `index`
    if (this.head === null || index < 0) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    // Special case: removing first node
    if (index === 0) {
      // Temporary store the data from the node

      const data = this.head.data;

      // just replace the head with the next node in the list
      this.head = this.head.next;

      // return the data at the previous head of the list
      return data;
    }

    // pointer use to traverse the list
    let current = this.head;

    // Keeps track of the node before current in the loop
    let previous = null;

    // used to track how deep into the list you are
    let i = 0;

    // loop
    while (current !== null && index > i) {
      // Save the value of current
      previous = current;

      // Traverse to the current node
      current = current.next;

      // increment the count
      i++;
      console.log({ i }, { index });
    }

    // if node was found, remove it
    if (current !== null) {
      // skip over the node to remove
      previous.next = current.next;

      // return the value that was just removed from the list
      return current.data;
    }

    // if node wasn't found, throw an error
    console.log(`Index ${index} does not exist in the list.`);
  }

  // Retrieving data from the list
  // Linked lists don’t allow random access to its contents, but you can still retrieve data in any given position by traversing the list and returning the data. To do so, you’ll add a get() method that accepts a zero-based index of the data to retrieve, like this:
  get(index) {
    // Ensure Index is a positive value
    if (index > -1) {
      // The pointer to use for traversal
      let current = this.head;

      // Used to keep track of where in the list you are
      let i = 0;

      // traverse the list until you reach either the end or the index
      while (current !== null && i < index) {
        current = current.next;
        i++;
      }
      // return the data if `current` isn't null
      return current != null ? console.log(current.data) : undefined;
    } else {
      return undefined;
    }
  }
}

const ll = new LinkedList();

// let's create the Linked List with node 1 which we have create earlier
const list = (new LinkedList().head = n1);

// ll.createList(n1);
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
// ll.insertLast(22);
// ll.remove(3);
ll.get(2);
// ll.clear();
// ll.getLast();
ll.printListData();
