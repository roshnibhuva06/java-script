// wap to arrange acending and decending in 1d array.

let arr = [43 , 23 , 82, 4 , 11 , 7]

for(let i=0; i<arr.length;i++)
{
 for(let j=i+1; j<arr.length;j++)
 {
     if(arr[i] > arr[j])
     {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
     }
 }
}
document.write(arr);