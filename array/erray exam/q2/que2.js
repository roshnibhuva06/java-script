//Check if the given string is a palindrom or not.\

let realname = "nayan";
let revername ="";

for(let i=realname.length-1; i>0; i--)
{
    revername+=realname[i];
}
if(realname==revername)
{
    document.write("this is palindrom");
}
else
{
    document.write("this is not palindrom");
}