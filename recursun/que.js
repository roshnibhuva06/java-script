function num(n)
{
    let sum=0;


   for(let i=1; i<=n;i++)
   {
    sum+=i;
   }
   return sum;
}

let ans = num(5)
document.write(ans);