//// IMPORTANT VARIABLES & CONSTANTS ////

// Constants //
const form = document.querySelector('.username__form');
const hidden = document.querySelector('.hidden');

// Last.fm API Key
const KEY = `b725d7c3f1302cf77740c3198f72ff35`;

// Variables //

// Usernames
const USER1 = "Superfrancis123";
const USER2 = "Exticx";

//// USER 1 DATA ////
// Calls data for the first user from the Last.fm API and stores it on the site

let U1_TopArtists;
let U1_TopAlbums;
let U1_TopTracks;

let U1_RecentArtists;
let U1_RecentAlbums;
let U1_RecentTracks;

let U1_UserInfo;

function U1_getData() {

  //// TOP STATS ////

  // Top Artists
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_TopArtists = data.topartists.artist;
      console.log("User 1 Top Artists:", U1_TopArtists)
    })

  // Top Albums
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_TopAlbums = data.topalbums.album;
      console.log("User 1 Top Albums:", U1_TopAlbums)
    })

  // Top Tracks
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_TopTracks = data.toptracks.track;
      console.log("User 1 Top Tracks:", U1_TopTracks)
    })

  //// RECENT STATS ////
  
  // Recent Artists
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER1}&api_key=${KEY}&period=7day&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_RecentArtists = data.topartists.artist;
      console.log("User 1 Recent Artists:", U1_RecentArtists)
    })

  // Recent Albums
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&limit=5&user=${USER1}&api_key=${KEY}&period=7day&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_RecentAlbums = data.topalbums.album;
      console.log("User 1 Recent Albums:", U1_RecentAlbums)
    })

  // Recent Tracks
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_RecentTracks = data.recenttracks.track;
      console.log("User 1 Recent Tracks:", U1_RecentTracks)
    })

  //// OVERALL STATS ////

  // User Info
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getInfo&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U1_UserInfo = data.user;
      console.log("User 1 User Info:", U1_UserInfo)
    })

}

//// USER 2 DATA ////
// Calls data for the first user from the Last.fm API and stores it on the site

let U2_TopArtists;
let U2_TopAlbums;
let U2_TopTracks;

let U2_RecentArtists;
let U2_RecentAlbums;
let U2_RecentTracks;

let U2_UserInfo;

function U2_getData() {

  //// TOP STATS ////

  // Top Artists
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_TopArtists = data.topartists.artist;
      console.log("User 2 Top Artists:", U2_TopArtists)
    })

  // Top Albums
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_TopAlbums = data.topalbums.album;
      console.log("User 2 Top Albums:", U2_TopAlbums)
    })

  // Top Tracks
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_TopTracks = data.toptracks.track;
      console.log("User 2 Top Tracks:", U2_TopTracks)
    })

  //// RECENT STATS ////
  
  // Recent Artists
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER2}&api_key=${KEY}&period=7day&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_RecentArtists = data.topartists.artist;
      console.log("User 2 Recent Artists:", U2_RecentArtists)
    })

  // Recent Albums
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&limit=5&user=${USER2}&api_key=${KEY}&period=7day&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_RecentAlbums = data.topalbums.album;
      console.log("User 2 Recent Albums:", U2_RecentAlbums)
    })

  // Recent Tracks
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_RecentTracks = data.recenttracks.track;
      console.log("User 2 Recent Tracks:", U2_RecentTracks)
    })

  //// OVERALL STATS ////

  // User Info
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getInfo&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
    .then(response => response.json())
    .then(data => {
      U2_UserInfo = data.user;
      console.log("User 2 User Info:", U2_UserInfo)
    })

}

//// USER DATA COMPARING ////

function calculateData(){

  //// SCROBBLE DIFFERENCES ////

  // Total Scrobble Difference
  if (U1_UserInfo.playcount > U2_UserInfo.playcount) {
    totalScrobbleDifference = U1_UserInfo.playcount - U2_UserInfo.playcount
  }

  if (U2_UserInfo.playcount > U1_UserInfo.playcount) {
    totalScrobbleDifference = U2_UserInfo.playcount - U1_UserInfo.playcount
  }
    
  // Top Artist Scrobble Difference
  if (U1_TopArtists[0].playcount > U2_TopArtists[0].playcount) {
    topArtistScrobbleDifference = U1_TopArtists[0].playcount - U2_TopArtists[0].playcount
  }

  if (U2_TopArtists[0].playcount > U1_TopArtists[0].playcount) {
    topArtistScrobbleDifference = U2_TopArtists[0].playcount - U1_TopArtists[0].playcount
  }

  // Top Album Scrobble Difference
  if (U1_TopAlbums[0].playcount > U2_TopAlbums[0].playcount) {
    topAlbumScrobbleDifference = U1_TopAlbums[0].playcount - U2_TopAlbums[0].playcount
  }

  if (U2_TopAlbums[0].playcount > U1_TopAlbums[0].playcount) {
    topAlbumScrobbleDifference = U2_TopAlbums[0].playcount - U1_TopAlbums[0].playcount
  }

  // Top Track Scrobble Difference
  if (U1_TopTracks[0].playcount > U2_TopTracks[0].playcount) {
    topTrackScrobbleDifference = U1_TopTracks[0].playcount - U2_TopTracks[0].playcount
  }

  if (U2_TopTracks[0].playcount > U1_TopTracks[0].playcount) {
    topTrackScrobbleDifference = U2_TopTracks[0].playcount - U1_TopTracks[0].playcount
  }

  // Logging
  console.log(totalScrobbleDifference)
  console.log(topArtistScrobbleDifference)
  console.log(topAlbumScrobbleDifference)
  console.log(topTrackScrobbleDifference)

  //// SCROBBLE DIFFERENCES ////

  

  // I know we're gonna have a lot of just the array data side by side so there isn't a whole whole lot to calculate
  
  // I'm gonna try to just write down in the doc what all is gonna be side by side and comaring
  // Yea that'd be kinda neat
  // Here I might try to photoshop us a rough like idea of what we might want for our layuout if you want
  // We could prolly use like <li> items for each of the 
  // I do like that layout tho yea
  // Also thought it might be cool to throw eachother's pfp up at the top somehow
  // Alrighty
  // We might have to inject it but I can look somethig up
  // Feel like there should be a way to

  // It seems that there's this like innerHTML thing we can use to write stuff into html elements directly
  // document.getElementById("id").innerHTML = whatever;
  // We can probably also do getElementByClass and those other ones as well

  // Also if you're doing any more css stuff at any point I'll throw the hex code for the lastboard logo color in the doc

  //  true, not much lol
  // ill mess around with like html later so we can get at least our scrobble counts in some sort of grid
}
// album art | song name | | | scrobbles
// yeah maybe
// here ill throw something together real quick just as a test
// can we refer to stuff from here to html or do we need to inject


// Eventlistener for data fetching after pressing the submit button
document.querySelector(".submitBtn").addEventListener("click", function(e) {
  e.preventDefault()
  
  U1_getData()
  U2_getData()  

  });

document.querySelector(".resultsBtn").addEventListener("click", function(e) {
  e.preventDefault()
  hidden.classList.remove('hidden');



  });

// let html;
// html = whatever
// form.insertAdjacentHTML("afterend", html);
// form can be whatever you wanna append to
// This is a good start
// might wanna commit too since class is almost over

let html;
    `<div class="U1__grid">  
            
            <p class="U1__T1 U1__T1name" >${U1_TopTracks[0].name}</p>
            <p class="U1__T1 U1__T1scr" >${U1_TopTracks[0].playcount}</p>

          </div>
          {/* i tried LMAO */}nope`