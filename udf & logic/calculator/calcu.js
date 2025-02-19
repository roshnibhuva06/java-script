function addition(num1,num2)
{
    document.write("addition is num1 , num 2 :"+(num1+num2));
    document.write("<br>")
}

function substraction(num1,num2)
{
    document.write("sub is num1 , num 2 :"+(num1-num2));
    document.write("<br>")
}

function multiplication(num1,num2)
{
    document.write("mul is num1 , num 2 :" +( num1*num2));
    document.write("<br>")
}

function division(num1,num2)
{
    document.write("div is num1 , num 2 :" +(num1/num2));
    document.write("<br>")
}

function module(num1,num2)
{
    document.write("mod is num1 , num 2 :" +( num1%num2));
    document.write("<br>")
}

 
{
    let num1 = parseInt(prompt("Enter first Number : "))
    let num2 = parseInt(prompt("Enter second Number : "))
   

    let choice = prompt("Enter a sign(- , * , / , + , % ) : ");

    switch(choice)
    {
        case "+" : 
        document.write (addition(num1,num2));
        break;

        case "-" : 
        document.write (substraction(num1,num2));
        break;

        case "*" : 
        document.write (multiplication(num1,num2));
        break;

        case "/" : 
        document.write (division(num1,num2));
        break;

        case "%" : 
        document.write (module(num1,num2));
        break;

        default : document.write("Enter valid num !");
    }

}

