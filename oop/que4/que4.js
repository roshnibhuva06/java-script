// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)

class overloading
{
    sum(A,B,C,D)
    {
        if (C == undefined && D == undefined) 
        {
            document.writeln(A + B);
        } 
        else if (D == undefined) 
        {
            document.writeln(A + B + C) ;
        } 
        else 
        {
            document.writeln(A + B + C + D);
        }
    }
} 

const s1 = new overloading();

s1.sum(10,20);
s1.sum(10, 20, 30);
s1.sum(10, 20, 40, 50); 