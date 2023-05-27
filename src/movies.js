// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
   let directorsArray = moviesArray.map(el => el.director)
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter((el) => {
        if(el.director === 'Steven Spielberg' && el.genre.includes('Drama')) {
            return el }
    })
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    let sum = moviesArray.reduce((total,current) => {
        return total + current.score
    },0)

    let average = 0
    if(moviesArray.length === 0) { 
        return 0
    } 
    else {
    average = sum/moviesArray.length
    return Number(average.toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

    let sum =  moviesArray.reduce((total,current) => {
        if(current.genre.includes('Drama')) {
            return total + current.score
        } else {
            return total
        }
    },0)
    
    let dramaArray = moviesArray.filter((el) => {
        if(el.genre.includes('Drama')) {
            return el }
    })

    let average = 0
    if(!dramaArray.length) {
        return average
    } else {
        average = sum/dramaArray.length
    }
     
    return Number(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
   let sortedArray = JSON.parse(JSON.stringify(moviesArray))

   sortedArray.sort((a,b) => {
    
        if(a.year !== b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title)
        }
   })

   return sortedArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    let orderArray = JSON.parse(JSON.stringify(moviesArray))

    orderArray.sort((a,b) => {
        return a.title.localeCompare(b.title)
    })

    let titleArray = orderArray.filter((el) => {
        return el.title
    })

    if(titleArray.length > 20) {
        return titleArray.slice(0,20)
    } else {
        return titleArray
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    let copiedArray = JSON.parse(JSON.stringify(moviesArray))

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {}
