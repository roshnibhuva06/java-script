
//cheak num is palindrom or not
let realname = "roshni";
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
