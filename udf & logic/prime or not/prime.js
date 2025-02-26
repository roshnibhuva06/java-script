// wap to check passed number in udf prime or not.
function prime(n)
{
    
 let x = 1; 
    
    
      if(n%2==1){
          document.write(n + " is prime number");
      }
      else if(n==2)
      {
        document.write(n + " is prime number");
      }
      
      else
      {
          document.write(n + " is not prime number");
      }
    
  
  }
  
  let n = parseInt(prompt("Enter the N is prime :"));
   

   prime(n);
