class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1)
  isEmpty() {
    return this.head === null;
  }

  // O(1)
  size() {
    return this.length;
  }

  // O(n)
  nodeAtIndex(index) {
    if (index < 0 || !this.head) return null;
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  // O(1)
  add(data) {
    const new_node = new Node(data);
    new_node.next = this.head;
    this.head = new_node;

    if (!this.tail) this.tail = new_node;
    this.length++;
  }

  // O(n)
  stringify() {
    let nodes = []
    let current = this.head;

    while(current) {
      if(current === this.head) {
        nodes.push(`[HEAD: ${current.data}]`)
      } else if (current.next === null) {
        nodes.push(`[TAIL: ${current.data}]`)
      } else {
        nodes.push(`[${current.data}]`)
      }

      current = current.next
    }

    return nodes.join(' --> ')
  }

  // O(n)
  search(key) {
    let current = this.head

    while (current) {
      if (current.data === key) {
        return `FOUND: ${current.data}`
      }

      current = current.next
    }

    return null
  }

  //O(n)
  insert(data, index) {
    if (index === 0) {
      this.add(data)
    }

    if (index > 0) {
      const new_node = new Node(data);

      let position = index;
      let current = this.head
    
      while (position > 1) {
        current = current.next;
        position--;
      }

      let prev_node = current;
      let next_node = current.next;

      prev_node.next = new_node
      new_node.next = next_node
    }
  }

  remove(key) {
    let current = this.head;
    let prev = null;
    let found = false

    while (current && found === false) {
      if (current.data === key && current === this.head) {
        found = true;
        this.head = current.next;
      } else if (current.data === key) {
        found = true
        prev.next = current.next;
      } else {
        prev = current
        current = current.next;
      }
    }

    return `REMOVED: ${current}`
  }

  nodeAtIndex(index) {
    if (index === 0) {
      return this.head
    } else {
      let current = this.head;
      let position = 0;

      while (position < index) {
        current = current.next
        position++;
      }

      return current;
    }
  }
}


// =============================TESTES=====================================
// let newlist = new List()

// const emptiness = newlist.isEmpty()
// console.log(emptiness)

// newlist.add(1)
// newlist.add(2)
// newlist.add(3)
// newlist.add(4)
// newlist.add(5)

// let size = newlist.size()
// console.log(size)
// console.log(newlist.stringify())
// console.log(newlist.search(4))
// console.log(newlist.remove(4))
// console.log(newlist.insert(67, 2))
// console.log(newlist.stringify())

module.exports = { List, Node };