function table(n) {
    for (let i = 1; i <= 10; i++) {
      document.write(n + "x " + i + "= " + i * n + "<br>");
    }
  }
  
  function table_loop(n) {
    let m = 1;
    for (let k = 1; k <= 1; k++) {
      for (let l = 1; l <= n; l++) {
        table(m);
        m++;
  
      }
      document.write("<br>");
    }
  }
  
  let m = prompt("Enter the value of N");
  m = parseInt(m);
  table_loop(m);