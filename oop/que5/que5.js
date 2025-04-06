// wap to perform method overriding to display student details.
// school(name,year) -> student(name,std,school,year)
// display() <- override this method

class School 
{
    #name;
    #year;
    constructor(name,year) 
    {
        this.#name=name;
        this.#year=year;
    }
    display() 
    {
       document.writeln(this.#name);
       document.writeln(this.#year);
    }
}
class Student extends School 
{
    #name;
    #std;
   
    constructor(name,std,school,year) 
    {
        super(school,year);
        this.#name=name;
        this.#std=std;
    }
    display() 
    {
        super.display();
        document.writeln(this.#name);
        document.writeln(this.#std);
    }
}

let student = new Student("mahi patel","12th","international school",2024);
student.display();  