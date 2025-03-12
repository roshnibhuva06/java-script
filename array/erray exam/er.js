
//Remove repeated elements from an array and sort in ascending order.
//Input: 1,7,3,2,4,5,2
//Output: 1,2,3,4,5,7
let arr =[1,7,3,2,4,5];

for(let i=0; i<arr.length;i++)
{
    for(let j=i; j<arr.length;j++)
    {
        if(arr[i] > arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j]=temp;
        }
    }
}
document.write(arr);