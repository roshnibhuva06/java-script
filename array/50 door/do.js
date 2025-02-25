
// [50 doors - closed at starting]
// 5 people have the master key of all doors.

// 1 -> 1 table -> 1,2,3,4,5,6,7,8,9,10
// 2 -> 2 table -> 2,4,6,8,10,12,14,16,18,20
// 3 -> 3 table -> 3,6,9,12,15,18,21....
// 4 ->
// 5 ->

// ? count : open = ? , closed = ?
let num = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<num.length;i++)
{
   if(num[i]%1==0)
   {
    document.write("true ");
   }
   else if()
   {
    document.write("false ")
   }
}