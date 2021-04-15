console.log('Hello airtable');

    var Airtable = require('airtable');
    console.log(Airtable);
    
    // use the airtable librar to get a variable that represents one of our bases
    var base = new Airtable({ apiKey: "keyjtJVsbYmuyLjlZ" }).base(
      "appTQl6lBBepqbNiz"
    );
    
 // get our collection base, select all the records
// specify functions that will receive the data
base("shadowslate")
.select({})
.eachPage(gotPageOfShadows, gotAllShadows);


    var shadows = [];

    // callback function that receives our data
function gotPageOfShadows(records, fetchNextPage) {
    console.log("gotPageOfShadows()");
    // add the records from this page to our books array
    shadows.push(...records);
    // request more pages
    fetchNextPage();
  }
  
  // call back function that is called when all pages are loaded
function gotAllShadows(err) {
    console.log("gotAllShadows()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading photos");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogShadows();
    showShadows();
  }
  
  // just loop through the books and console.log them
function consoleLogShadows() {
    console.log("consoleLogShadows()");
    shadows.forEach((shadow) => {
      console.log("Shadow:", shadow);
    });
  }

   // loop through the books, create an h2 for each one, and add it to the page
function showShadows() {
    console.log("showShadows()");
    shadows.forEach((shadow) => {
      // new container
    var shadowContainer = document.createElement("div");
    shadowContainer.classList.add("shadow-container");
    document.querySelector(".container").append(shadowContainer);
  
      var shadowImage = document.createElement("img")
      shadowImage.classList.add("shadow-image");
      shadowImage.src = shadow.fields.images[0].url;
      shadowContainer.append(shadowImage);
  
      var shadowTitle = document.createElement("p");
      shadowTitle.classList.add("title");
      shadowTitle.innerText = shadow.fields.title;
      shadowContainer.append(shadowTitle);
  
      //zoom image container
      var shadowZoom = document.createElement("div");
        shadowZoom.classList.add("image-zoom");
        document.querySelector(".container").append(shadowZoom);
  
      //hidden discription
      var shadowZoomImage = document.createElement("img")
      shadowZoomImage.classList.add("zoom-image");
      shadowZoomImage.src = shadow.fields.images[0].url;
      shadowZoom.append(shadowZoomImage);
  
      var shadowCaption = document.createElement("p");
      shadowCaption.classList.add("shadow-caption");
      shadowCaption.innerText = shadow.fields.title;
      shadowZoom.append(shadowCaption);
  
      var shadowPhotographer = document.createElement("p");
      shadowPhotographer.classList.add("shadow-photographer");
      shadowPhotographer.innerText = shadow.fields.photographer;
      shadowZoom.append(shadowPhotographer);
  
      var shadowDate = document.createElement("p");
      shadowDate.classList.add("shadow-date");
      shadowDate.innerText = shadow.fields.date;
      shadowZoom.append(shadowDate);
  
      var remove = document.createElement("div")
      remove.classList.add("remove-button");
      shadowZoom.append(remove);
  
  
      //이미지 확대
      shadowImage.addEventListener("click", function() {
        shadowZoom.classList.toggle("active");
        shadowZoomImage.classList.toggle("active");
        shadowPhotographer.classList.toggle("active");
        shadowDate.classList.toggle("active");
        shadowCaption.classList.toggle("active");
      });
  
      shadowZoom.addEventListener("click", function(){
        shadowZoom.classList.toggle("remove");
      })

      // get genre field from airtable
    // loop through the array and add each genre as
    // a class to the song container
    var shadowGenre = shadow.fields.genre;
    shadowGenre.forEach(function(genre) {
      shadowContainer.classList.add(genre);
    });

// clicking on filter by pop
    // change background of pop genres to red
    // else change to white
 
    var filterC = document.querySelector(".filter1");
    filterC.addEventListener("click", function() {
      if (shadowContainer.classList.contains("c")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterG = document.querySelector(".filter2");
    filterG.addEventListener("click", function() {
      if (shadowContainer.classList.contains("g")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterJ = document.querySelector(".filter3");
    filterJ.addEventListener("click", function() {
      if (shadowContainer.classList.contains("j")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterL = document.querySelector(".filter4");
    filterL.addEventListener("click", function() {
      if (shadowContainer.classList.contains("l")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterP = document.querySelector(".filter5");
    filterP.addEventListener("click", function() {
      if (shadowContainer.classList.contains("p")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterR = document.querySelector(".filter6");
    filterR.addEventListener("click", function() {
      if (shadowContainer.classList.contains("r")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterU = document.querySelector(".filter7");
    filterU.addEventListener("click", function() {
      if (shadowContainer.classList.contains("unknown")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    }
    )}