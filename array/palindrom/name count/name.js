let realname = "pranav";
let count = 0;

for(let i=0; i<realname.length;i++)//p=1,r=1
{
  count = 1;//p=1
  for(let j=i+1;j<realname.length;j++)
  {
     if(realname[i]==realname[j])
     {
        count++;
     }
     else
     {
        realname+=realname[i];
     }
     
  }
  document.write(realname[i]+ "  " + count + "<br> ")
 }
