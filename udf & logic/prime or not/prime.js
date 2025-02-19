function prime(n){
    let i;
  
    for(i=2; i<=n; i++){
      if(i==0){
          document.write("num is prime number");
      }
      else{
          document.write("num is not prime number");
      }
    }
  
  }
  
  let n = prompt("Enter the N is prime :");
  
  n=parseInt(n);
  prime(n);