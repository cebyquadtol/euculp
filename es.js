class SomeClass {
    constructor() {
        // Initialization logic here
    }

    reinit(_, pulse) {
        // Reinitialization logic here
        console.log('Reinitializing with', _, pulse);
        // Return some value based on reinitialization
        return 'Reinit complete';
    }

    eval(_, pulse) {
        // Evaluation logic here
        console.log('Evaluating with', _, pulse);
        // Return some value based on evaluation
        return 'Eval complete';
    }

    process(init, _, pulse) {
        // Use the ternary operator to decide which method to call
        return init ? this.reinit(_, pulse) : this.eval(_, pulse);
    }
}

// Usage example:
const instance = new SomeClass();
const result1 = instance.process(true, 'input1', 'pulse1');  // Calls reinit
const result2 = instance.process(false, 'input2', 'pulse2'); // Calls eval

console.log(result1); // Output: Reinit complete
console.log(result2); // Output: Eval complete
