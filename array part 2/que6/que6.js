// wap to arrange acending and decending in 1d array.

let arr = [2,22,45,88,1,4,44]

for(let i=0; i<arr.length;i++)
{
 for(let j=i+1; j<arr.length;j++)
 {
     if(arr[i] < arr[j])
     {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
     }
 }
}
document.write(arr);