// wap to use all array method

let arr= ["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"];
let birds=arr;
document.write(birds + "<br>");


//PUSH

let start = arr.push("Eagle" + "<br>");
document.write(arr);


//join
{
    let str = arr.join["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"]
    birds = arr;

    let one = arr.join("_")
    document.write(one)


}
//at
{
    let str = arr.at["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"]
    birds = arr;

    let two = arr.at("4 ")
    document.write(two)
    document.write("<br>")

}

//pop
{
    let val = arr.pop["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"];
    birds = arr;

    let three = arr.pop()
    document.write(three)
 
}

//shift

{
    let length = arr.shift["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"];
    birds = arr;

    let four = arr.shift()
    document.write(four)
    document.write("<br>")
    
}

//unshift

{
    let length = arr.unshift["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"];
    birds = arr;

    let five = arr.unshift("duck")
    document.write(five)
    document.write("<br>")
}

//splice

{
    let newarr = arr.splice["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"];
    newarr = arr;

    let six = arr.splice(2,2);
    document.write(six)
    document.write("<br>")
 
}

//slice
{
    let newArr = arr.slice["bird" , "perot" , "peacock" , "owl" , "crow", "toucan"];
    newArr = arr;

    let seven = arr.slice(2,4);
    document.write(seven)
}
