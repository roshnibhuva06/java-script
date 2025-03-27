// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.
class Animal {

    #name;
    #type;
    #gender;
    #age;

    animal(name,type,gender,age)
    {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }

    print()
    {
        document.writeln(this.#name);
        document.writeln(this.#type);
        document.writeln(this.#gender);
        document.writeln(this.#age);

    }

}

const a1 = new Animal();
const a2 = new Animal();
const a3 = new Animal();

a1.animal("ela" , "cat" , "male" , 2)
a2.animal("mona" , "dog" , "female" , 6)
a3.animal("sona" , "Rabbit" , "female" ,3)


document.writeln("Animal 1" +"<br>")
a1.print()

document.writeln("<br>"+ "Animal 2" +"<br>")
a2.print()

document.writeln("<br>"+"Animal 3" +"<br>")
a3.print()