const apikey = "2a5ae80d";
const img = document.getElementById("img");
const title = document.getElementById("name");
const actor = document.getElementById("actor");
const writer = document.getElementById("writer");
const director = document.getElementById("director");
const Language = document.getElementById("Language");
const Genre = document.getElementById("Genre");
const Awards = document.getElementById("Awards");
const Released = document.getElementById("Released");
const Year = document.getElementById("Year");
const des = document.getElementById("des");
const button = document.getElementById("btn");
const input = document.getElementById("input");

function callApi(t) {
    const api = "https://www.omdbapi.com/?t=" + t + "&apikey=2a5ae80d";

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            if (data.Response === "True") {
                img.src = data.Poster;
                title.innerHTML = data.Title;
                actor.innerHTML = data.Actors;
                writer.innerHTML = data.Writer;
                director.innerHTML = data.Director;
                Language.innerHTML = data.Language;
                Genre.innerHTML = data.Genre;
                Awards.innerHTML = data.Awards;
                Released.innerHTML = data.Released;
                Year.innerHTML = data.Year;
                des.innerHTML = data.Plot;
            } else {
                alert("Movie not found!");
            }
        });
}

button.addEventListener("click", function () {
    const t = input.value;
    if (t.trim()) {
        callApi(t);
    } else {
        alert("Please enter a movie title.");
    }
});
