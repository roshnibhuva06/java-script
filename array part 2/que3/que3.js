
// wap to find max/min from array.
let num = [ 85 , 75 ,25 ,10 ,95]
let min; 
min = num[0];

for(let i=0; i<num.length; i++)
{
    if(num[i] < min)
    {
        min = num[i]
    }
}
document.write(  min);