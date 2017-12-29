/*STEP 1 Your task is now, to implement a closure (a function factory),
that generates functions which allow us to determine all numbers that are divisible by "WHAT EVER NUMBER".
Once you have the factory function above working well for 3, 10 and 21, create an array which uses this
factory above to calculate the number of item in arr above which are divisible by numbers between 1-30*/
let arr = [];
for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}
console.log(arr);
let newArr = [];
for (let i = 1; i <= 30; i++) {
    newArr.push(i);
}
console.log(newArr);

function divisibleFactory(y) {

    function yDiv(a) {

        return a % y === 0;

    }
    return yDiv;
}

const divby150 = arr.filter(divisibleFactory(150))
console.log(divby150);
console.log(arr.filter(divisibleFactory(3)));
console.log(arr.filter(divisibleFactory(10)));
console.log(arr.filter(divisibleFactory(21)));


console.log(arr
    .filter(divisibleFactory(2)).length)
//.map(divisibleFactory(1000))(newArr));

console.log(arr
    .filter(b => b <= 30)
    .map(b => 1000 / b));
//STEP 2
/*Using the movies json file from the previous exercise as the source, extend your appliation to do the following:
Give each movie a tag: Excellent (>=8.5), Very Good (>=8), Good (<8) based on the ratings.
Render all the movies as a list (similar to how you were presenting Github repositories in the homework before).
Add a input field, and a button to perform search. Use .filter method on arrays to filter on the titles.
Add 4 radio buttons for each tag + All tag (All, Excellent, Very Good, Good) and filter the movies based on the tag selected.
Display only the movies in the list which match the two filter criterion above.
Display the average rating of the movies being filtered and displayed.*/




function getAjaxData(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => resolve(JSON.parse(request.responseText));
        request.onerror = () => reject(request.status);
        request.send();
    });




function fetchmovies(movies) {
const url = "https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json"

    return getAjaxData(url);
}


fetchmovies(movies).then( movie => {
  if (movie.rating >= 8.5) {
      movie.tag = 'good';
  } else if (movie.rating >= 8) {
      movie.tag = 'average';
  } else if (movie.rating < 8) {
      movie.tag = 'bad';
  }
  return movie;
});
}



/*function mainMovies(movies) {
    //movies tag function in the main function
    console.log(movies.rating)
    movies.map((movie) => movie)
    movies = movies.map(rateMovie);
    console.log(movies);

function rateMovie(movie) { //  Give each movie a tag: Good (>=7),  (4-6)Average, Bad (0-3) based on the ratings.
    if (movie.rating >= 8.5) {
        movie.tag = 'good';
    } else if (movie.rating >= 8) {
        movie.tag = 'average';
    } else if (movie.rating < 8) {
        movie.tag = 'bad';
    }
    return movie;
}*/
