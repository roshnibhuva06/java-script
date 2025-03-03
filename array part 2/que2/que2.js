// count frequency of all character/element in string/array.

let Name = "poonam"
let count=0

for(let i=0; i<Name.length; i++)
{
    count=1;

    for(j=i+1; j<=Name.length; j++)
    {
        if(Name[i] == Name[j])
        {
            count++;
        }
     }
     document.write(Name[i] + " - " + count + "<br>");
    
}

