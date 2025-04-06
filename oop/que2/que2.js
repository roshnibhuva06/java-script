// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class Students{

    #name;
    #roll_no;
    #age;
    #std;
    #percentage;

    constructor(name,roll_no,age,std,percentage){

        this.#name = name;
        this.#roll_no = roll_no;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    print(){

        document.writeln("name :"+this.#name+"<br>");
        document.writeln("roll_no :"+this.#roll_no+"<br>");
        document.writeln("age :"+this.#age+"<br>");
        document.writeln("std :"+this.#std+"<br>");
        document.writeln("percentage: "+this.#percentage+"<br>");

    }
}

const s1 = new Students ("ishani" , 6 , 16 , 10 , 70.00);
const s2 = new Students ("riya" , 23 , 18 , 11, 88.03);
const s3 = new Students ("hasti" , 16 , 20 , 12 , 68.44);

document.writeln("Student 1"+"<br>")
s1.print();
document.writeln( "<br>"+"Student 2"+"<br>")
s2.print();
document.writeln("<br>"+"Student 3"+"<br>")
s3.print();