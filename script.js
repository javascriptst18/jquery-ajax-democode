const searchTermInput = document.querySelector('#searchTerm');
let movies = [];

searchTermInput.addEventListener('change', searchForMovies);

function searchForMovies() {
  let searchValue = searchTermInput.value;
  $.getJSON(`https://javascriptst18.herokuapp.com/trending?q=${searchValue}`, function (response) {
    movies = response;
    let filteredMovies = [];

    for (let movie of movies) {
      if (movie.originalTitle) {
        filteredMovies.push(movie);
      }
    }
    console.log(filteredMovies);
    console.log(movies);
  })
}


function searchForMoviesPromiseStyle() {
  fetch('https://javascriptst18.herokuapp.com/trending')
    .then(function (response) {
      return response.json();
    })
    .then(function (movies) {
      console.log(movies[0].title);
    })
    .catch(function (error) {
      console.log(error);
    });
}

