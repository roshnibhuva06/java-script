// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class Employee {

    set(name,id,salary,role)
    {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    get()
    {
        document.writeln(name);
        document.writeln(id);
        document.writeln(salary);
        document.writeln(role );
    }

}
const e1 = new Employee();
const e2 = new Employee();
const e3 = new Employee();

document.writeln("Emp 1")
e1.person("bansi" , 1212 , 80000 ,  "software" + "<br>")

document.writeln("Emp 2")
e2.person("rajvi" , 1213 , 60000 ,  "workplace" + "<br>")

document.writeln("Emp 3")
e3.person("riya" , 1214 , +90000 , "business")