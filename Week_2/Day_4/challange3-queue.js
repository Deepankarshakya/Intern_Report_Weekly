class TaskQueue {
    constructor() {
        this.tasks = [];
    }
    
    enqueue(task) {
        this.tasks.push(task);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.tasks.shift();
    }
    
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.tasks[0];
    }
    
    isEmpty() {
        return this.tasks.length === 0;
    }
    
    size() {
        return this.tasks.length;
    }
    
    clear() {
        this.tasks = [];
    }
}

const queue = new TaskQueue();

queue.enqueue("Task 1");
queue.enqueue("Task 2");
queue.enqueue("Task 3");

console.log(queue.size());
console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.isEmpty());

queue.clear();
console.log(queue.isEmpty());