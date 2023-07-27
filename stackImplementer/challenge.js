var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
var stack = new Stack();
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
