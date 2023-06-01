//// IMPORTANT VARIABLES & CONSTANTS ////

// Constants //

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
      console.log("User 1 Top Albums:", U1_RecentAlbums)
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
      console.log("User 2 Top Albums:", U2_RecentAlbums)
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

// Eventlistener for data fetching after pressing the submit button
document.querySelector(".submitBtn").addEventListener("click", function(e) {
  e.preventDefault()
  
  U1_getData()
  U2_getData()  

  });

document.querySelector(".resultsBtn").addEventListener("click", function(e) {
  e.preventDefault()
  
  console.log("Artists:", U1_TopArtists)
  console.log("Albums:", U1_TopAlbums)
  console.log("Tracks:", U1_TopTracks)

  console.log(U1_TopTracks[2].name + ";", U1_TopTracks[2].playcount, "scrobbles")

  });