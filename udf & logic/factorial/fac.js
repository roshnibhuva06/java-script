function factorial(n)
{

    let i;
    let fact=1;

    for(i=1; i<=n; i++){

       fact=fact*i;
    }
    document.write("The factorial is:" (n*fact));


}

let n=parseInt(prompt("Enter the value N"));

factorial(n);