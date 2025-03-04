
// [50 doors - closed at starting]
// 5 people have the master key of all doors.

// 1 -> 1 table -> 1,2,3,4,5,6,7,8,9,10
// 2 -> 2 table -> 2,4,6,8,10,12,14,16,18,20
// 3 -> 3 table -> 3,6,9,12,15,18,21....
// 4 ->
// 5 ->

// ? count : open = ? , closed = ?
// let num = [1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,12,14,16,18,20]
// let count = 1;


// for(let i=<num.length-1;i=0;i++)//p=1,r=1
// {
//   count = 1;//p=1
//   for(let j=i+1;j<num.length;j++)
//   {
//      if(num[i]==num[j])
//      {
//         count++;
//      }
//      else
//      {
      
//      }
     
//   }
//   document.write(num[i]+ "  " + count + "<br> ")
//  }
let doors = [];
let persons = [1, 2, 3, 4, 5];
let index = 0;
let close = 0;
let open = 0;
for (let i = 1; i <= 50; i++) {
  doors.push(0);
}

for (let i = 1; i <= 5; i++) {
  let table = [];
  for (let k = 1; k <= 10; k++) {
    table.push(i * k);
  }
  //   document.write(table + "<br>");
  table.forEach((e) => {
    if (doors[e - 1] == 0) {
      doors[e - 1] = 1;
    } else {
      doors[e - 1] = 0;
    }
  });
  table = [];
}

index = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(doors[index] + " ");
    index++;
  }
  document.write("<br>");
}
doors.forEach((e) => {
if (e == 0) {
  close++;
} else {
  open++;
}
});

document.write("Open : " + open + "<br>");
document.write("Close:"+close);