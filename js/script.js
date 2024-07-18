const moviesList = document.getElementById('movies-list');

fetch('db.json')
    .then(response => response.json())
    .then(data => {
        data.movies.forEach(movie => {
            const movieItem = `
                <div class="movie">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-info">
                        <h2>${movie.title}</h2>
                        <p>${movie.description}</p>
                        <p>Rated: ${movie.rated}</p>
                    </div>
                </div>
            `;
            moviesList.innerHTML += movieItem;
        });
    })
    .catch(error => {
        console.error('Error fetching movies:', error);
    });
    
// creating form object
let formData = {
albumId : updatedAlbum,
url : updatedPhotoUrl,
title: updatedPhotoTitle
}


// updating the resource on our server
fetch(`${'ttp://localhost:3000/movies'}/${id}`, {
    method : "PATCH",
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body : JSON.stringify(formData)
})
.then(res => res.json())
.then(photo => console.log(ph))

