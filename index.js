const message = document.querySelector("#message");


const addMovie = event => {

    event.preventDefault();

    let inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);

    deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(movie);
    inputField.value = "";
}

const deleteMovie = event => {

    event.target.parentNode.remove("checked");
    message.textContent = "Movie deleted!";
}

const crossOffMovie = event => {

    event.target.classList.toggle("checked");

    if (event.target.classList.contains("checked")) {

        message.textContent = "Movie watched!";
    } else {

        message.textContent = "Movie added back";
    }
    
}


let form = document.querySelector("form");

form.addEventListener("submit", addMovie);
