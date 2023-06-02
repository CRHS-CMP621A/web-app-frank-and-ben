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

}

// Eventlistener for data fetching after pressing the submit button
document.querySelector(".submitBtn").addEventListener("click", function(e) {
  e.preventDefault()
  
  U1_getData()
  U2_getData()  

  });

document.querySelector(".resultsBtn").addEventListener("click", function(e) {
  e.preventDefault()
  hidden.classList.remove('hidden');
  
  // User 1 Grid HTML //
  U1_html = `
  
  <img src = ${U1_UserInfo.image[2]['#text']} size = 600px>
  <h2>${U1_UserInfo.name}<h2>
  
  `

  document.querySelector(".U1__header").innerHTML = U1_html

  // User 2 Grid HTML //

  U2_html = `
  
  <img src = ${U2_UserInfo.image[2]['#text']} size = 600px>
  <h2>${U2_UserInfo.name}<h2>
  
  `
  document.querySelector(".U2__header").innerHTML = U2_html

  });