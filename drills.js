class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new _Node(value, this.top);
  }

  pop() {
    if (!this.top) return;
    const topNode = this.top;
    this.top = this.top.next;
    return topNode.value;
  }
}

module.exports = Stack;

const starTrek = new Stack();
starTrek.push('spock');
starTrek.push('bob');
starTrek.push('jim');

//2 useful functions

function peek(stack) {
  if (stack.top) {
    return stack.top.value;
  }
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  if (isEmpty(stack)) return;
  let tempTop = stack.top;
  while (tempTop !== null) {
    console.log(tempTop.value);
    tempTop = tempTop.next;
  }
}

//3 palindrome

// function isPalidrome(str) {
//   const stack = new Stack();
//   str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

//   for (let i = 0; i < str.length; i++) {
//     stack.push(str[i]);
//   }

//   for (let i = 0; i < str.length; i++) {
//     let stackValue = stack.pop();
//     let charValue = str[i];
//     if (stackValue !== charValue) {
//       return false;
//     }
//   }

//   return true;
// }

// 4 match parens

// function hasParen(str) {
//   const stack = new Stack();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i]==='(')
//       stack.push(str[i]);

//     if (str[i]===')')
//     {
//       if (stack.pop()===null)
//         return false;
//     }
//   }
//   return(stack.top===null);
// }

//5 Sort

// function sort(unsorted) {
//   const tempStack = new Stack();

//   let temp;
//   while (unsorted.top !== null) {
//     temp = unsorted.pop();
//     while (tempStack.top !== null && tempStack.top.value > temp) {
//       unsorted.push(tempStack.pop());
//     }
//     tempStack.push(temp);
//   }
//   return tempStack;
// }


