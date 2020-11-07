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
// function ratesAverage(movies) {
//   const averageRate = movies.reduce(function (average, movie, a, list) {
//     average + movie.rate / list.length;
//   }, 0);
//   return averageRate;
// }

function ratesAverage(movies) {
  let mappedList = movies.map((x) => x.rate);
  let numberedList = mappedList.map(Number);
  let totalRating = numberedList.reduce((total, rating) => total + rating);
  let avarageRating = totalRating / numberedList.length;
  return avarageRating;
}

// const averageYearOfPurchaseOfOldHeavyCars = cars
//   .filter(function (car) {
//     return car.weight >= 0.8 && car.year <= 2016;
//   })
//   .map(function (car) {
//     return car.year;
//   })
//   .reduce(function (accumulator, year, index, list) {
//     return accumulator + year / list.length;
//   }, 0);

// console.log(averageYearOfPurchaseOfOldHeavyCars);
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
