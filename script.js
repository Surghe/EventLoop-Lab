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

// Part 2 ------------------------------------------------------------------------------------

function flattenRecursive(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenRecursive(val)) : acc.concat(val), []);
}

function trampoline(fn) {
    return function(...args) {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    };
}

const flattenTrampolined = trampoline(function flatten(arr) {
    return arr.length === 0 ? [] : 
           Array.isArray(arr[0]) ? () => flatten(arr[0].concat(arr.slice(1))) : 
           [arr[0]].concat(flatten(arr.slice(1)));
});

try {
    console.log(flattenTrampolined([1, [2, [3, [4, 5]], 6], 7])); 
} catch (error) {
    console.error("Error caught:", error);
}

// Part 3 ----------------------------------------------------

document.body.innerHTML += '<div id="prime-container"></div>';
const primeContainer = document.getElementById("prime-container");

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

async function listPrimes(n) {
    primeContainer.innerHTML = "<strong>Prime Numbers:</strong><br>";
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primeContainer.innerHTML += i + "<br>";
            await new Promise(resolve => setTimeout(resolve, 50)); // Allow rendering
        }
    }
    alert("Prime number calculation is complete!");
}

try {
    console.log(flattenTrampolined([1, [2, [3, [4, 5]], 6], 7])); // Example usage
    listPrimes(50); // Example prime listing
} catch (error) {
    console.error("Error caught:", error);
}

