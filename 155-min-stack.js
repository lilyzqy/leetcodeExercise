/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minIndex = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    /* push into stack */
    this.stack.push(x);

    /*if less than min or no min, set minIndex as last(the one pushed in) */
    if(this.minIndex === -1 || x < this.stack[this.minIndex]) {
        this.minIndex = this.stack.length - 1;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poped = this.stack.pop();

    /* if min is poped out, find the min in the stack */
    if(this.minIndex === this.stack.length) {

        /* reset minIndex */
        this.minIndex = 0;

        for(let i = 1; i < this.stack.length; i++) {
            if(this.stack[i] < this.stack[this.minIndex]) {
                this.minIndex = i;
            }
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.minIndex];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
