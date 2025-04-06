// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.
class Animal {

    #name;
    #type;
    #gender;
    #age;

    set(name,type,gender,age)
    {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }

    get()
    {
        document.writeln(this.#name);
        document.writeln(this.#type);
        document.writeln(this.#gender);
        document.writeln(this.#age);

    }

}

const a1 = new Animal();
a1.set("ela" , "cat" , "male" , 2);
a1.get();

const a2 = new Animal();
a2.set("mona" , "dog" , "female" , 6);
a2.get();

const a3 = new Animal();
a3.set("sona" , "Rabbit" , "female" ,3);
a3.get();

