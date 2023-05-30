//// IMPORTANT VARIABLES & CONSTANTS ////

// Constants //

// Last.fm API Key
const KEY = `b725d7c3f1302cf77740c3198f72ff35`;

// Variables //

// Usernames
const USER1 = `Superfrancis123`;
const USER2 = `Extixc`;

//// USER 1 DATA ////
// Calls data for the first user from the Last.fm API and stores it on the site

let U1_TopArtists;

    
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
.then(response => response.json())
.then(data => {
  U1_TopArtists = data.topartists.artist;
  console.log("Fetched Data:", U1_TopArtists)
})

username__form.addEventListener("submit", function(e) {
  e.preventDefault()
  
  console.log("Stored data:", U1_TopArtists)

  });