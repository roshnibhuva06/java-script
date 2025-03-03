// check number is palindrom or not.

let realname = "nayan";
let revername = "";

for(let i=realname.length-1;i>=0;i--)
{
    revername+=realname[i];
}
if(realname==revername)
{
    document.write("name is palindrom ");
}
else
{
    document.write("name is not palindrom ");
}  


