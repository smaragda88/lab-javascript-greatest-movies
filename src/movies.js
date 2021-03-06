// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const StevenSpielbergMovies = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return StevenSpielbergMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// TEST "Return average even if one of the movies does not have rate" still fails could not figure out how to fix that
function ratesAverage(movies) {
  let total = 0;
  if (!movies.length) {
    return 0;
  }
  movies.map((x) => (total += x.rate));
  let average = total / movies.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((movies) => {
    return movies.genre.includes('Drama');
  });
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// could not figiure out the last step of sorting alphabetically
function orderByYear(movies) {
  const sortedMovies = [...movies];
  sortedMovies.sort((a, b) => {
    //   if (a.year === b.year){
    //       return a.localeCompare(b)
    //   }
    if (a.year < b.year) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let newMoviesList = [...movies];
  newMoviesList.sort((a, b) => {
    if (a.title > b.title) return 1;
    else if (a.title == b.title) return 0;
    else return -1;
  });
  let result = [];
  newMoviesList.forEach((element) => {
    result.push(element.title);
  });
  if (result.length > 20) result.splice(20);
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
