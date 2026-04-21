console.log("Running Task 1... ");

let output = []; // Initialize as an empty string

function sortPrime(num) {
    if (num <= 1) return true; // 1 is not a prime number
    if (num === 2) return false;  // 2 is the only even prime

    // Check for factors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return true;
    }
    return false;
}

for (let i = 100; i >= 1; i--) {
    if (sortPrime(i)) {
        // check if numbers divisible by 3 & 5
        if (i % 3 == 0 && i % 5 == 0) {
            output += "FooBar" + ", ";
        }
        // check if numbers divisible by 3 
        else if (i % 3 == 0) {
            output += "Foo" + ", ";
        }
        // check if numbers divisible by 5
        else if (i % 5 == 0) {
            output += "Bar" + ", ";
        }
        else {
            output += i + ", ";
        }
    }
}

// Remove the trailing comma and space for a cleaner look
output = output.slice(0, -2);

console.log("Output: ", output);