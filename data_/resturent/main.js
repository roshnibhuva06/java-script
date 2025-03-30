// Create a Restaurant class with properties: name, cuisineType, and rating.
// Instantiate 3 restaurant objects with different values.

class restaurant {
  Name;
  cuisinetype;
  rating;


  set(Name, cuisinetype, rating)
{
  this.Name = Name;
  this.cuisinetype = cuisinetype;
  this.rating = rating;
}

get()
{
  document.writeln("name : "+ this.Name +"<br>");
  document.writeln("cuisinetype: "+ this.cuisinetype +"<br>");
  document.writeln("rating : "+ this.rating+"<br>");
}
}



const restaurant1 = new restaurant();
restaurant1.set("pizza", "indian", 8 + "<br>");
restaurant1.get();

const restaurant2 = new restaurant();
restaurant2.set("maggie", "chiness", 6 + "<br>");
restaurant2.get();

const restaurant3 = new restaurant();
restaurant3.set("pasta", "vesu", 9 + "<br>");
restaurant3.get();
