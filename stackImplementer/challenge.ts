class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
stack.pop();
stack.pop();
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: undefined