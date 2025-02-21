// Write a program to check whether a number is a prime number or not using the function.
// Test Data :
// Input a positive number: 5
//  :The number 5 is a prime number. 

function table(n)
{
    let i = 1;
    for(let i=1; i<=n; i++)
    {
        if(i%2==0)
        {
             document.write(+ n + "this is a prime num: ")
        }

        else
        {
            document.write(+ n + "this is a not prime num: ")
        }
    }
}

let x = parseInt(prompt("enter the num n: "))


table(n)