
// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary,role
// access all properties of parent by child class only and set and get all values.
 
class Indian{

    constructor(adharNo,birthPlace){

        this.adharNo = adharNo ;
        this.birthPlace = birthPlace;
    }

    Indian(){

        document.writeln("Adhar no.:" +this.adharNo +  "<br>") ;
        document.writeln("Birth place: " + this.birthPlace + "<br>");
    }

}


class Person extends Indian {

    constructor(adharNo,birthPlace,name,age,gender){

        super(adharNo,birthPlace)

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    Person(){

        super.Indian();
        document.writeln("Name : "+ this.name  + "<br>");
        document.writeln("Age : "+ this.age  + "<br>");
        document.writeln("Gender : "+ this.gender  + "<br>");
    }

}


class Employee extends Person {

    constructor(adharNo,birthPlace,name,age,gender,id,salary,role){

        super(adharNo,birthPlace,name,age,gender)
        this.id = id;
        this.salary = salary;
        this.role = role;

    }

    Employee(){

        super.Person();
        document.writeln("Id no.   : "+ this.id  + "<br>");
        document.writeln("Salary : "+ this.salary  + "<br>");
        document.writeln("Role  : "+ this.role  + "<br>");
    }
}


const child = new Indian( "<br>"+8734521698, "jetpur" , "suhani" , 25 , "female" , 1010 , 95000 ,"business"+"<br>")
child.Indian();
const child1 = new Person("<br>"+ 7890543216, "surat" , "sneha" , 20 , "female" , 2010 , 85000 ,"workshop"+"<br>")
child1.Person();
const child2 = new Employee(6785432189, "rajkot" , "mahi" , 15 , "female" , 3010 , 70000 ,"fashion"+"<br>")
child2.Employee();


