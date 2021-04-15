console.log('Hello airtable');

    var Airtable = require('airtable');
    console.log(Airtable);
    
    // use the airtable librar to get a variable that represents one of our bases
    var base = new Airtable({ apiKey: "keyjtJVsbYmuyLjlZ" }).base(
      "appTQl6lBBepqbNiz"
    );
    
 // get our collection base, select all the records
// specify functions that will receive the data
base("shadowsearly")
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
    var filterA = document.querySelector(".filter1");
    filterA.addEventListener("click", function() {
      if (shadowContainer.classList.contains("a")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterAa = document.querySelector(".filter2");
    filterAa.addEventListener("click", function() {
      if (shadowContainer.classList.contains("aa")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterAaa = document.querySelector(".filter3");
    filterCAaa.addEventListener("click", function() {
      if (shadowContainer.classList.contains("aaa")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterC = document.querySelector(".filter4");
    filterC.addEventListener("click", function() {
      if (shadowContainer.classList.contains("c")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterD = document.querySelector(".filter5");
    filterD.addEventListener("click", function() {
      if (shadowContainer.classList.contains("d")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterDd = document.querySelector(".filter6");
    filterDd.addEventListener("click", function() {
      if (shadowContainer.classList.contains("dd")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterDDd = document.querySelector(".filter7");
    filterDDd.addEventListener("click", function() {
      if (shadowContainer.classList.contains("ddd")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterE = document.querySelector(".filter8");
    filterE.addEventListener("click", function() {
      if (shadowContainer.classList.contains("e")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterJ = document.querySelector(".filter9");
    filterJ.addEventListener("click", function() {
      if (shadowContainer.classList.contains("j")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterJj = document.querySelector(".filter10");
    filterJj.addEventListener("click", function() {
      if (shadowContainer.classList.contains("jj")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterK = document.querySelector(".filter11");
    filterK.addEventListener("click", function() {
      if (shadowContainer.classList.contains("k")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterM = document.querySelector(".filter12");
    filterM.addEventListener("click", function() {
      if (shadowContainer.classList.contains("m")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterN = document.querySelector(".filter13");
    filterN.addEventListener("click", function() {
      if (shadowContainer.classList.contains("n")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterP = document.querySelector(".filter14");
    filterP.addEventListener("click", function() {
      if (shadowContainer.classList.contains("p")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterR = document.querySelector(".filter15");
    filterR.addEventListener("click", function() {
      if (shadowContainer.classList.contains("r")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterRr = document.querySelector(".filter16");
    filterRr.addEventListener("click", function() {
      if (shadowContainer.classList.contains("rr")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterRrr = document.querySelector(".filter17");
    filterRrr.addEventListener("click", function() {
      if (shadowContainer.classList.contains("rrr")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterT = document.querySelector(".filter18");
    filterT.addEventListener("click", function() {
      if (shadowContainer.classList.contains("t")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterTt = document.querySelector(".filter19");
    filterTt.addEventListener("click", function() {
      if (shadowContainer.classList.contains("tt")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

    var filterU = document.querySelector(".filter20");
    filterU.addEventListener("click", function() {
      if (shadowContainer.classList.contains("unknown")) {
        shadowContainer.style.visibility = 'visible';
      } else {
        shadowContainer.style.visibility = 'hidden';
      }
    });

  }
  )}


