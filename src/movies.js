const movies = require('./data');

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(currentDirector) {
    return movies.map((currentDirector) => {
        return currentDirector.director;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    if (moviesArr === 0) {
        return 0;
    }
    const drama = movies.filter((moviesArr) => {
        return moviesArr.genre.includes('Drama');
    });
    const steven = movies.filter((moviesArr) => {
        return moviesArr.genre.includes('Drama');
    });
    const stevenAndDrama = movies.filter((moviesArr) => {
        return (
            moviesArr.genre.includes('Drama') &&
            moviesArr.director.includes('Steven Spielberg')
        );
    });
    if (steven === 2) {
        return 2;
    }
    if (steven === 0) {
        return 0;
    }

    return stevenAndDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
    let sum = 0;
    const ret = movies.map((moviesArr) => {
        return moviesArr.score;
    });
    for (let i in ret) {
        sum += ret[i];
    }
    const average = sum / ret.length;
    //const averageTwoPlacesDecimals = average.toFixed(2);
    return average;
}
console.log(scoresAverage(movies));

//reduce((prev, curr) => prev + curr

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArr) {
    const drama = movies.filter((moviesArr) => {
        return moviesArr.genre.includes('Drama');
    });

    const sumDrama = scoresAverage(drama);
    return sumDrama;
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg
    };
}