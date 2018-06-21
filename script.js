const searchTermInput = document.querySelector('#searchTerm');
let movies = [];

/**
 * 'change' will listen for when we press enter or when we unfocus
 * the input-field. When this happens, run the function 'searchForMovies'
 */
searchTermInput.addEventListener('change', searchForMovies);

function searchForMovies() {
  // Grab the value from the input field
  let searchValue = searchTermInput.value;
  $.getJSON(`https://javascriptst18.herokuapp.com/trending?q=${searchValue}`, function (response) {
    /* 
      Saving the response of movie objects in a global array
      because we want to be able to access the data at a later time,
      for example when we need to search
    */

    movies = response;
    /**
     * Almost Always create a new array when you want to filter
     * a result, this way you will still have the old values
     * saved
     */
    let filteredMovies = [];

    for (let movie of movies) {
      // originalTitle can be empty, if empty string === false
      if (movie.originalTitle) {
        // Save the filtered movie in the newly created array
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

