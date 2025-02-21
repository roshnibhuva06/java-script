// Write a program to find the factorial number passed by the argument and return ans.
// Test Data:
// Input a positive number: 5
// Expected Output :120

function factorial(n) {

    let i;
    let fact = 1;

    for (i = 1; i <= n; i++) {

        fact = fact * i;

    }
    document.write(`The factorial of ${n} is ${fact}`);


}

let n = parseInt(prompt("Enter the value of N"));

factorial(n);