//// IMPORTANT VARIABLES & CONSTANTS ////

let test = "test"

// Constants //
const form = document.querySelector('.username__form');
const hidden = document.querySelector('.hidden');
const hidesubmit = document.querySelector('.hidesubmit');
const hideresults = document.querySelector('.hideresults');

// Last.fm API Key
const KEY = `b725d7c3f1302cf77740c3198f72ff35`;

// Variables //

// Usernames
let inputValue1 = document.querySelector("#U1_input").value; 
let inputValue2 = document.querySelector("#U2_input").value;

let USER1;
let USER2;

// Functions //
function inputBox() {
  inputValue1 = document.querySelector("#U1_input").value; 
  inputValue2 = document.querySelector("#U2_input").value; 

  USER1 = inputValue1;
  USER2 = inputValue2;
}

setInterval(inputBox, 100);

hidesubmit.classList.remove('hidesubmit')

//// USER 1 DATA ////
// Calls data for the first user from the Last.fm API and stores it on the site

let U1_TopArtists;
let U1_TopAlbums;
let U1_TopTracks;

let U1_RecentArtists;
let U1_RecentAlbums;
let U1_RecentTracks;

let U1_UserInfo;

let U1_Artist1Img;
let U1_Artist2Img;
let U1_Artist3Img;
let U1_Artist4Img;
let U1_Artist5Img;

let U1_Track1Img;
let U1_Track2Img;
let U1_Track3Img;
let U1_Track4Img;
let U1_Track5Img;

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

function U1_getTopArtistImg() {

  // #1 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U1_TopArtists[0].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U1_Artist1Img = data.artist;
    console.log("User 2 Artists Image Info:", U1_Artist1Img)
  })

  // #2 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U1_TopArtists[1].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U1_Artist2Img = data.artist;
    console.log("User 2 Artists Image Info:", U1_Artist2Img)
  })

  // #3 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U1_TopArtists[2].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U1_Artist3Img = data.artist;
    console.log("User 2 Artists Image Info:", U1_Artist3Img)
  })

  // #4 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U1_TopArtists[3].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U1_Artist4Img = data.artist;
    console.log("User 2 Artists Image Info:", U1_Artist4Img)
  })

  // #5 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U1_TopArtists[4].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U1_Artist5Img = data.artist;
    console.log("User 2 Artists Image Info:", U1_Artist5Img)
  })

}

function U1_getTopTrackImg() {

  // #1 Track Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U1_TopTracks[0].name}&artist=${U1_TopTracks[0].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image')) {
      // Add a Default Image URL for 3 Properites
      data.track.album.image = [
        { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" },
        { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" },
        { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" }
      ];
    } else {
      // Check if image[0] is Missing
      if (!data.track.album.image[0] || !data.track.album.image[0]['#text']) {
        data.track.album.image[0] = { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" };
      }
      // Check if image[1] is Missing
      if (!data.track.album.image[1] || !data.track.album.image[1]['#text']) {
        data.track.album.image[1] = { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" };
      }
      // Check if image[2] is Missing
      if (!data.track.album.image[2] || !data.track.album.image[2]['#text']) {
        data.track.album.image[2] = { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" };
      }
    }

    U1_Track1Img = data.track;
    console.log("User 1 Track Image Info:", U1_Track1Img)
  })

  // #2 Track Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U1_TopTracks[1].name}&artist=${U1_TopTracks[1].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U1_Track2Img = data.track;
    console.log("User 1 Track Image Info:", U1_Track2Img)
  })

  // #3 Track Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U1_TopTracks[2].name}&artist=${U1_TopTracks[2].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    // Missing Album Proprerty Error Checker
    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U1_Track3Img = data.track;
    console.log("User 1 Track Image Info:", U1_Track3Img)
  })

  // #4 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U1_TopTracks[3].name}&artist=${U1_TopTracks[3].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U1_Track4Img = data.track;
    console.log("User 1 Track Image Info:", U1_Track4Img)
  })

  // #5 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U1_TopTracks[4].name}&artist=${U1_TopTracks[4].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }
  
    U1_Track5Img = data.track;
    console.log("User 1 Track Image Info:", U1_Track5Img)
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

let U2_Artist1Img;
let U2_Artist2Img;
let U2_Artist3Img;
let U2_Artist4Img;
let U2_Artist5Img;

let U2_Track1Img;
let U2_Track2Img;
let U2_Track3Img;
let U2_Track4Img;
let U2_Track5Img;

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

function U2_getTopArtistImg() {

  // #1 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U2_TopArtists[0].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U2_Artist1Img = data.artist;
    console.log("User 2 Artists Image Info:", U2_Artist1Img)
  })

  // #2 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U2_TopArtists[1].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U2_Artist2Img = data.artist;
    console.log("User 2 Artists Image Info:", U2_Artist2Img)
  })

  // #3 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U2_TopArtists[2].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U2_Artist3Img = data.artist;
    console.log("User 2 Artists Image Info:", U2_Artist3Img)
  })

  // #4 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U2_TopArtists[3].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U2_Artist4Img = data.artist;
    console.log("User 2 Artists Image Info:", U2_Artist4Img)
  })

  // #5 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${U2_TopArtists[4].name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    U2_Artist5Img = data.artist;
    console.log("User 2 Artists Image Info:", U2_Artist5Img)
  })

}

function U2_getTopTrackImg() {

  // #1 Track Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U2_TopTracks[0].name}&artist=${U2_TopTracks[0].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }
    
    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image')) {
      // Add a Default Image URL for 3 Properites
      data.track.album.image = [
        { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" },
        { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" },
        { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" }
      ];
    } else {
      // Check if image[0] is Missing
      if (!data.track.album.image[0] || !data.track.album.image[0]['#text']) {
        data.track.album.image[0] = { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" };
      }
      // Check if image[1] is Missing
      if (!data.track.album.image[1] || !data.track.album.image[1]['#text']) {
        data.track.album.image[1] = { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" };
      }
      // Check if image[2] is Missing
      if (!data.track.album.image[2] || !data.track.album.image[2]['#text']) {
        data.track.album.image[2] = { '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" };
      }
    }

    U2_Track1Img = data.track;
    console.log("User 2 Track Image Info:", U2_Track1Img)
  })

  // #2 Track Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U2_TopTracks[1].name}&artist=${U2_TopTracks[1].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U2_Track2Img = data.track;
    console.log("User 2 Track Image Info:", U2_Track2Img)
  })

  // #3 Track Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U2_TopTracks[2].name}&artist=${U2_TopTracks[2].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    // Missing Album Proprerty Error Checker
    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U2_Track3Img = data.track;
    console.log("User 2 Track Image Info:", U2_Track3Img);
  });


  // #4 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U2_TopTracks[3].name}&artist=${U2_TopTracks[3].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U2_Track4Img = data.track;
    console.log("User 2 Track Image Info:", U2_Track4Img)
  })

  // #5 Artist Image
  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${U2_TopTracks[4].name}&artist=${U2_TopTracks[4].artist.name}&limit=5&user=${USER2}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {

    if (!data.track.hasOwnProperty('album')) {
      // Create Album Object
      data.track.album = {};
    }

    // Missing or Blank Image Proprerty Error Checker
    if (!data.track.album.hasOwnProperty('image') || data.track.album.image[0]['#text'] === '') {
      // Add a Default Image URL
      data.track.album.image = [{ '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" }];
    }

    U2_Track5Img = data.track;
    console.log("User 2 Track Image Info:", U2_Track5Img)
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

// Eventlisteners for data fetching after pressing the submit button
document.querySelector(".submitBtn").addEventListener("click", function(e) {
  e.preventDefault()
  hidesubmit.classList.add('hidesubmit')
  hideresults.classList.remove('hideresults')
  hidden.classList.add('hidden');
  
  U1_getData()
  U2_getData()
  
  document.querySelector(".resultsBtn").addEventListener("mouseover", function(e) {
    U1_getTopArtistImg()
    U2_getTopArtistImg()
    U1_getTopTrackImg()
    U2_getTopTrackImg()

  });

  });

// Eventlistener for showing all the processed data after clicking the Show Results button
document.querySelector(".resultsBtn").addEventListener("click", function(e) {
  e.preventDefault()
  hideresults.classList.add('hideresults')
  hidesubmit.classList.remove('hidesubmit')
  hidden.classList.remove('hidden');


  // User 1 Grid HTML //

  // Header
  U1_html_header = `
  
  <img src = ${U1_UserInfo.image[2]['#text']} class = U1__photo size = 600px>
  <h2>${U1_UserInfo.name}<h2>
  <p class = U1_ownScrobbles>${U1_UserInfo.playcount} Total Scrobbles</p>
  <p class = U1_ownArtists>${U1_UserInfo.artist_count} Artists</p>
  <p class = U1_ownAlbums>${U1_UserInfo.album_count} Albums</p>
  <p class = U1_ownTracks>${U1_UserInfo.track_count} Tracks</p>

  
  `

  document.querySelector(".U1__header").innerHTML = U1_html_header

  // Top Artists

  U1_html_topArtists = `

  <div class = "U1__topArtistsTitle">
    <h1>Top Artists<h1>
  </div>

  <li>
    <div class = listNumberOne>
      <div class = listOnePosition>
        <p>1</p>
      </div>
      <div class = listOneImage>
        <img src = ${U1_Artist1Img.image[2]['#text']}>
      </div>
      <div class = listOneStats>
        <p class = oneName>${U1_TopArtists[0].name}</p>
        <p class = oneScrobbles>${U1_TopArtists[0].playcount} Scrobbles</p>
      </div>
  </li>

  <li>
    <div class = listPosition>
      <p>2</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Artist2Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopArtists[1].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopArtists[1].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>3</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Artist3Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopArtists[2].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopArtists[2].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>4</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Artist4Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopArtists[3].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopArtists[3].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>5</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Artist5Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopArtists[4].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopArtists[4].playcount} Scrobbles</p>
    </div>
  </li>

  `
  document.querySelector(".U1__topArtists").innerHTML = U1_html_topArtists

  // Top Albums

  U1_html_topAlbums = `

  <div class = "U1__topAlbumsTitle">
    <h1>Top Albums<h1>
  </div>

  <li>
    <div class = listNumberOne>
      <div class = listOnePosition>
        <p>1</p>
      </div>
      <div class = listOneImage>
        <img src = ${U1_TopAlbums[0].image[2]['#text']}>
      </div>
      <div class = listOneStats>
        <p class = oneName>${U1_TopAlbums[0].name}</p>
        <p class = oneScrobbles>${U1_TopAlbums[0].playcount} Scrobbles</p>
      </div>
  </li>

  <li>
    <div class = listPosition>
      <p>2</p>
    </div>
    <div class = listImage>
      <img src = ${U1_TopAlbums[1].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopAlbums[1].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopAlbums[1].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>3</p>
    </div>
    <div class = listImage>
      <img src = ${U1_TopAlbums[2].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopAlbums[2].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopAlbums[2].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>4</p>
    </div>
    <div class = listImage>
      <img src = ${U1_TopAlbums[3].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopAlbums[3].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopAlbums[3].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>5</p>
    </div>
    <div class = listImage>
      <img src = ${U1_TopAlbums[4].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopAlbums[4].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopAlbums[4].playcount} Scrobbles</p>
    </div>
  </li>

  `
  document.querySelector(".U1__topAlbums").innerHTML = U1_html_topAlbums

  // Top Tracks

  U1_html_topTracks = `

  <div class = "U1__topTracksTitle">
    <h1>Top Tracks<h1>
  </div>

  <li>
    <div class = listNumberOne>
      <div class = listOnePosition>
        <p>1</p>
      </div>
      <div class = listOneImage>
        <img src = ${U1_Track1Img.album.image[2]['#text']}>
      </div>
      <div class = listOneStats>
        <p class = oneName>${U1_TopTracks[0].name}</p>
        <p class = oneScrobbles>${U1_TopTracks[0].playcount} Scrobbles</p>
      </div>
  </li>

  <li>
    <div class = listPosition>
      <p>2</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Track2Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopTracks[1].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopTracks[1].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>3</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Track3Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopTracks[2].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopTracks[2].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>4</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Track4Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopTracks[3].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopTracks[3].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>5</p>
    </div>
    <div class = listImage>
      <img src = ${U1_Track5Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U1_TopTracks[4].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U1_TopTracks[4].playcount} Scrobbles</p>
    </div>
  </li>

  `
  document.querySelector(".U1__topTracks").innerHTML = U1_html_topTracks

  // User 2 Grid HTML //

  // Header
  U2_html_header = `
  
  <img src = ${U2_UserInfo.image[2]['#text']} class = U2__photo size = 600px>
  <h2>${U2_UserInfo.name}<h2>
  <p class = U2_ownScrobbles>${U2_UserInfo.playcount} Total Scrobbles</p>
  <p class = U2_ownArtists>${U2_UserInfo.artist_count} Artists</p>
  <p class = U2_ownAlbums>${U2_UserInfo.album_count} Albums</p>
  <p class = U2_ownTracks>${U2_UserInfo.track_count} Tracks</p>
  
  `
  document.querySelector(".U2__header").innerHTML = U2_html_header

  // Top Artists

  U2_html_topArtists = `
  
  <div class = "U2__topArtistsTitle">
    <h1>Top Artists<h1>
  </div>

  <li>
    <div class = listNumberOne>
      <div class = listOnePosition>
        <p>1</p>
      </div>
      <div class = listOneImage>
        <img src = ${U2_Artist1Img.image[2]['#text']}>
      </div>
      <div class = listOneStats>
        <p class = oneName>${U2_TopArtists[0].name}</p>
        <p class = oneScrobbles>${U2_TopArtists[0].playcount} Scrobbles</p>
      </div>
  </li>

  <li>
    <div class = listPosition>
      <p>2</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Artist2Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopArtists[1].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopArtists[1].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>3</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Artist3Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopArtists[2].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopArtists[2].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>4</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Artist4Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopArtists[3].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopArtists[3].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>5</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Artist3Img.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopArtists[4].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopArtists[4].playcount} Scrobbles</p>
    </div>
  </li>

  
  `

  document.querySelector(".U2__topArtists").innerHTML = U2_html_topArtists

  // Top Albums

  U2_html_topAlbums = `

  <div class = "U2__topAlbumsTitle">
    <h1>Top Albums<h1>
  </div>

  <li>
    <div class = listNumberOne>
      <div class = listOnePosition>
        <p>1</p>
      </div>
      <div class = listOneImage>
        <img src = ${U2_TopAlbums[0].image[2]['#text']}>
      </div>
      <div class = listOneStats>
        <p class = oneName>${U2_TopAlbums[0].name}</p>
        <p class = oneScrobbles>${U2_TopAlbums[0].playcount} Scrobbles</p>
      </div>
  </li>

  <li>
    <div class = listPosition>
      <p>2</p>
    </div>
    <div class = listImage>
      <img src = ${U2_TopAlbums[1].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopAlbums[1].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopAlbums[1].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>3</p>
    </div>
    <div class = listImage>
      <img src = ${U2_TopAlbums[2].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopAlbums[2].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopAlbums[2].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>4</p>
    </div>
    <div class = listImage>
      <img src = ${U2_TopAlbums[3].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopAlbums[3].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopAlbums[3].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>5</p>
    </div>
    <div class = listImage>
      <img src = ${U2_TopAlbums[4].image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopAlbums[4].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopAlbums[4].playcount} Scrobbles</p>
    </div>
  </li>

  `
  document.querySelector(".U2__topAlbums").innerHTML = U2_html_topAlbums

  // Top Tracks

  U2_html_topTracks = `

  <div class = "U2__topTracksTitle">
    <h1>Top Tracks<h1>
  </div>

  <li>
    <div class = listNumberOne>
      <div class = listOnePosition>
        <p>1</p>
      </div>
      <div class = listOneImage>
        <img src = ${U2_Track1Img.album.image[2]['#text']}>
      </div>
      <div class = listOneStats>
        <p class = oneName>${U2_TopTracks[0].name}</p>
        <p class = oneScrobbles>${U2_TopTracks[0].playcount} Scrobbles</p>
      </div>
  </li>

  <li>
    <div class = listPosition>
      <p>2</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Track2Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopTracks[1].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopTracks[1].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>3</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Track3Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopTracks[2].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopTracks[2].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>4</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Track4Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopTracks[3].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopTracks[3].playcount} Scrobbles</p>
    </div>
  </li>

  <li>
    <div class = listPosition>
      <p>5</p>
    </div>
    <div class = listImage>
      <img src = ${U2_Track5Img.album.image[0]['#text']}>
    </div>
    <div class = listName>
      <p>${U2_TopTracks[4].name}</p>
    </div>
    <div class = listScrobbles>
      <p>${U2_TopTracks[4].playcount} Scrobbles</p>
    </div>
  </li>

  `
  document.querySelector(".U2__topTracks").innerHTML = U2_html_topTracks

  });