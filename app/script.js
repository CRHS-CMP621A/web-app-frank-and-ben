//// IMPORTANT VARIABLES & CONSTANTS ////

// Constants //

// Last.fm API Key
const KEY = `b725d7c3f1302cf77740c3198f72ff35`;

// Variables //

// Usernames
// let USER1 = `Superfrancis123`;
const USER1 = `Superfrancis123`;
const USER2 = `Extixc`;

//// USER 1 DATA ////
// Calls data for the first user from the Last.fm API and stores it on the site

let U1_TopArtists;
let U1_TopTracks;
let U1_RecentTracks;
let U1_UserInfo;

// Top Stats //

// Top Artists

form.addEventListener('submit', function (e) {
  e.preventDefault 

fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U1_TopArtists = data.topartists.artist;
    console.log("Fetched Data:", U1_TopArtists)
  })


console.log("Stored data:", U1_TopArtists)

// Top Tracks
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1topTracks = data.toptracks.track;

    // console.log(U1topTracks)

  })

// Recent Stats //

// Recent Tracks
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1recentTracks = data.recenttracks.track;

    // console.log(U1recentTracks)

  })

// Overall Stats//

// User Info
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getInfo&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1userInfo = data.user;

    // console.log(U1userInfo)

  })

//// USER 2 DATA ////
// Calls data for the second user from the Last.fm API and stores it on the site

let U2_TopArtists;
let U2_TopTracks;
let U2_RecentTracks;
let U2_UserInfo;

// Top Stats //

// Top Artists 
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U2topArtists = data.topartists.artist;

    // console.log(U2topArtists)

  })

// Top Tracks
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U2topTracks = data.toptracks.track;

    // console.log(U2topTracks)

  })

// Recent Stats //

// Recent Tracks
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U2recentTracks = data.recenttracks.track;

    // console.log(U2recentTracks)

  })

// Overall Stats //

// User Info
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getInfo&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U2userInfo = data.user;

    // console.log(U2userInfo)

  })

//// LEADERBOARD CALCULATION ////
// Specifically for leaderboards, gathers locally stored data and calculates it according to what we want to display in the leaderboards.

// Total Scrobble Difference
})