// prints "hi" in the browser's dev tools console
console.log("hi");

/* Part 1 */
// A string consisting of your name //
var name = "Michelle";  
console.log(name);

// Your favorite number as an integer//
var MyFavNumber = 3;
console.log(MyFavNumber)

// Your favorite number as a string //
const num = 3;
console.log(num.toString())

// A boolean value //
console.log(null || 2)

// An array consisting of each of the letters of your first name //
console.log('M', 'i', 'c', 'h','e', 'l', 'l', 'e')
            
// An array consisting of multiple, different data types. Include at least 3 different data types. //
console.log(7 + 9, 'Ergonomic data', true)

// Add two strings togethers. The first string is your first name, and the second string is your last name. //
var first_name = 'Michelle';
var last_name = 'Kim';
console.log(first_name,last_name);

// Add two integers together to equal the number 100. //
console.log(40 + 60)


/* Part 2 */
// For the array you specified in question 1 (consisting of each of the letters of your first name), log the first item of the array and the last item of the array. When you refer to the last item in the array, try to do it by using the length of the array, rather than manually counting the index of the array.//
var name = "Michelle"; 

function firstAndLast(array) {

var first = name[0];
var last = name[name.length-1];

var objOutput = {};
objOutput[first]=last

return objOutput;
}

var display = firstAndLast(name);

console.log(display);


/* Part 3*/
// Log the number of characters in the string ‘supercalifragilisticexpialidocious’ by using the length property. //
var marypoppins = 'supercalifragilisticexpialidocious';
console.log(marypoppins.length);


/* Part 4*/
//Log the result of this expression: the length of characters in your first name is equal to the length of characters in your last name. //
var first_name = 'Michelle';
var last_name = 'Kim';
console.log(first_name) == console.log(last_name);


/* Part 5 */
// Create a loop that loops through the array of characters in your first name and logs each character. //
var my_things = ['M', 'C', 'K'];
my_things.forEach(function(item) {
  console.log(item);
});


/* Part 6 */
// Create a conditional statement that checks to see if the current time is between 7pm and 9:40pm. //
var time = new Date().getHours();
if (time > 19) {
    message = 'Just passed 7pm';
} else if (time < 21.40) {
   message = 'Now heading to night';
}
console.log(time)

/* Part 7 */
// Create a conditional statement with multiple conditions that checks to see what the current date is, and logs a unique message for each day of the week. //
var date = new Date();
if ( currentDate.getDay() == 1) {
    console.log('Still Monday');
    }
  if ( currentDate.getDay() == 2) {
    console.log('Still Tuesday');
    }
  if ( currentDate.getDay() == 3) {
    console.log('Still Wednesday');
    }
  if ( currentDate.getDay() == 4) {
    console.log('Still Thursday');
    }
  if ( currentDate.getDay() == 5) {
    console.log('Finally Friday!');
    }
  if ( currentDate.getDay() == 6) {
    console.log('YAY Saturday!');
    }
  if ( currentDate.getDay() == 7) {
    console.log('YAY Sunday!');
  }
//

/* Part 8 */
//Create 4 arrays consisting of the following items. Define variables to store each of the 4 arrays.//

  // - Your favorite 3 restaurants : //
var restaurants = (['Toc Toc', 'Raku', 'Panell Cafe']);
console.log("restaurants:");

  // - Your favorite 3 things you can’t do during a pandemic : //
var things = (['Travel', 'Party', 'Go for a walk without a mask']);
console.log("things");

  // - Your favorite 3 places in NYC : //
var nyc = (['Greenwich', 'Central Park', 'MOMA']);
console.log("nyc");

  // - Your favorite 3 movies : // 
var movies = (['Life is Beautiful', 'Microhabitat', 'The Matrix']);
console.log("movies");


/* Part 9 */ 
// Create an array of arrays consisting of the variables from the previous question. Define a variable to hold this array of arrays. //

var array1 = ['restaurants','Toc Toc', 'Raku', 'Panell Cafe'];
var array2 = ['things', 'Travel', 'Party', 'Go for a walk without a mask'];
var array3 = ['nyc','Greenwich', 'Central Park', 'MOMA'];
var array4 = ['movies','Life is Beautiful', 'Microhabitat', 'The Matrix'];
var items = [[array1],[array2]],[array3],[array4]];
console.log(arrays);

/* Part 10 */ 
// Loop through your array of arrays and log the value of the each item in the array. You should be looping through 4 things, and each value you log should be an array. For example, the first item logged would be an array containing 3 restaurants, the second item would be an array containing 3 animals, etc. //


/* Part 11 */
//Create a nested for loop that loops through the array of your favorite items and logs each individual item. The first loop should log the category of the item, while the nested loop should log each individual item in that category.//

