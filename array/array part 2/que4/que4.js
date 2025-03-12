// wap to find max/min from array.
let num = [44,5,2,55,87,99]
let max; 
max = num[0];

for(let i=0; i<num.length; i++)
{
    if(num[i] > max)
    {
        max = num[i]
    }
}
document.write(max);