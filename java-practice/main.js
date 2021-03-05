//part1
console.log("hi");

var name = "Michelle";  
console.log(name);

var MyFavNumber = 3;
console.log(MyFavNumber)

const num = 3;
console.log(num.toString())

console.log(null || 3)

console.log('M', 'i', 'c', 'h','e', 'l', 'l', 'e')
            
console.log(8*3, "hello world", true)

var first_name = 'Michelle';
var last_name = 'Kim';
console.log(first_name,last_name);

console.log(40 + 60)


// part 2
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


//part3
var marypoppins = 'supercalifragilisticexpialidocious';
console.log(marypoppins.length);


//part4
var first_name = 'Michelle';
var last_name = 'Kim';
console.log(first_name) == console.log(last_name);


//part5
var my_initial = ['M', 'C', 'K'];
my_initial.forEach(function(item) {
  console.log(item);
});


//part6
var time = new Date().getHours();
if (time > 19) {
    message = 'Just passed 7pm';
} else if (time < 21.40) {
   message = 'Now heading to night';
}
console.log(time)

//part7
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

// part8 
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
console.log ("this is confusing")

/* Part 11 */
//Create a nested for loop that loops through the array of your favorite items and logs each individual item. The first loop should log the category of the item, while the nested loop should log each individual item in that category.//

