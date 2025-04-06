
//Create a Restaurant class with properties: name, cuisineType, and rating.
//Instantiate 3 restaurant objects with different values.
class Restaurant{

    constructor(Name,CuisineType,Rating)
    {
        this.Name = Name;
        this.CuisineType = CuisineType;
        this.Rating = Rating;
    }

    print()
    {
        document.writeln("Name :" + this.Name + "<br>");
        document.writeln("CuisineType :" + this.CuisineType + "<br>");
        document.writeln("Rating :" + this.Rating + "<br>");
    }
}

const restaurant = new Restaurant("pizza", "Indian", 8 + "<br>");
restaurant.print();

const restaurant1 = new Restaurant("noodles", "chinese", 9 + "<br>");
restaurant1.print();

const restaurant2 = new Restaurant("pasta", "Italian", 7 + "<br>");
restaurant2.print();