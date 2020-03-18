class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
    this.length++;
  }

  dequeue() {

    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }

    this.length--;
    return node.value;
  }
}

module.exports = Queue;

function peek(queue){
  if (queue.first) {
    return queue.first.value;
  }
  return null;
}

function isEmpty(queue){
  return (queue.first===null);
}

function display(queue) {
  if (isEmpty(queue)) return;
  let tempTop = queue.first;
  while (tempTop) {
    console.log(tempTop.value);
    tempTop = tempTop.next;
  }
}

// 7 Double Linked list

// class _Node {
//   constructor(value, next = null, prev = null) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// class QDLL {
//   constuctor(head, tail) {
//     this.first = null;
//     this.last = null;
//   }

//   enqueue(value) {
//     let newNode = new _Node(value);
//     if (!this.last) {
//       this.first = newNode;
//       this.last = newNode;
//       return;
//     }

//     this.last.next = newNode;
//     newNode.prev = this.last;
//     this.last = newNode;
//   }

//   dequeue() {
//     if (!this.first) return;
//     const temp = this.first;

//     if (!this.first.next) {
//       this.first = null;
//       this.last = null;
//       return temp.value;
//     }

//     this.first = this.first.next;
//     this.first.prev = null;
//     return temp.value;
//   }

//   print() {
//     let result = '';
//     let temp = this.first;
//     while (temp.next) {
//       result += `${temp.value}->`;
//       temp = temp.next;
//     }

//     console.log(result + temp.value + '->null');
//   }
// }


//9 squaredance

class dancePartners {
  constructor () {
    this.maleQ = new Queue();
    this.femaleQ = new Queue();
  }

  queueDancer(string) {
    const gender = string [0];
    const name = string.split(' ')[1];

    if (gender === 'F') this.femaleQ.enqueue(name);
    if (gender === 'M') this.maleQ.enqueue(name);

    if (this.femaleQ.first && this.maleQ.first) {
      const fDancer = this.femaleQ.dequeue();
      const mDancer = this.maleQ.dequeue();
      console.log(`Female dancer is ${fDancer}, and the male dancer is ${mDancer}`);
    }

    if (this.femaleQ.first) {
      let count = 1;
      let currNode = this.femaleQ.first;

      while (currNode.next !== null) {
        count ++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} female dancers waiting to dance.`);
    }

    if (this.maleQ.first) {
      let count = 1;
      let currNode = this.maleQ.first;

      while (currNode.next !== null) {
        count ++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} male dancers waiting to dance.`);
    }
  }
}