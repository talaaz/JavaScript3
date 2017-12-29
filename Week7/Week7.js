//STEP 1-1
let numbers = [1, 2, 3, 4];


const newNumbers = numbers.filter(a => a % 2 === 0);
const doubledNumbers = newNumbers.map(a => a * 2);
console.log("The doubled numbers are", doubledNumbers);
//STEP 1-1 EX.2
/*
const numbers = [1, 3, 5, 6, 8, 9, 15, 17];
console.log(numbers);
const newNumbers = numbers
    .filter(a => (a % 2 === 1)) // Is odd
    .map(a => a * 2) //doubles the odd numbers
console.log(newNumbers); //("The doubled numbers are", newNumbers")
*/

//STEP 2

const url = "https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json"

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function() {
        console.log('Server error');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
}



function mainMovies(movies) {
    //movies tag function in the main function
    console.log(movies.rating)
    movies.map((movie) => movie)
    movies = movies.map(rateMovie);
    console.log(movies);


    //Calculate the average rating of all the movies.
    const averageRating = movies
        .map(a => parseFloat(a.rating))
        .reduce((a, b) => a + b, 0) / movies.length
    console.log(averageRating);

    //Count the total number of Good, Average and Bad movies.
    const totalNumberOfGoodMovies = movies
        .filter(movie => movie.rating >= 8.5)
        .map(movie => movie.ratingText = 'good').length
    console.log(totalNumberOfGoodMovies);

    const totalNumberOfAverageMovies = movies
        .filter(movie => movie.rating >= 8)
        .map(movie => movie.ratingText = 'average').length
    console.log(totalNumberOfAverageMovies);

    const totalNumberOfBadMovies = movies
        .filter(movie => movie.rating < 8)
        .map(movie => movie.ratingText = 'bad').length
    console.log(totalNumberOfBadMovies);

    //Count the number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"].
    const keywords = movies
        .map(a => (a === "The") && (a === "dog") && (a === "who") && (a === "is") && (a === "not") && (a === "a") && (a === "man"))
        .length
    console.log(keywords);


    //Count the number of movies made between 1980-1989 (including both the years).
    const oldmovies = movies
        .filter(movie => movie.year >= 198 && movie.year < 1989)
        .length
    console.log(oldmovies);

}

function mainRecipes(recipes) {
    console.log(recipes[0]);
}

function rateMovie(movie) { //  Give each movie a tag: Good (>=7),  (4-6)Average, Bad (0-3) based on the ratings.
    if (movie.rating >= 8.5) {
        movie.tag = 'good';
    } else if (movie.rating >= 8) {
        movie.tag = 'average';
    } else if (movie.rating < 8) {
        movie.tag = 'bad';
    }
    return movie;
}


getAjaxData(url, mainMovies);
