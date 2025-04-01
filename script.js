// Event Loop Lab

// Part 1----------------------------------------------------------------------------

// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let counter = 0;

function recursive() {
    counter++;
    recursive(); // Recursive call
}

try {
    recursive(); // Initial function call
} catch (error) {
    console.error("Error caught:", error);
    console.log("Counter value at error:", counter);
}