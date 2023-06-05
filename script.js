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

// Input Box Checker
function inputBox() {
  inputValue1 = document.querySelector("#U1_input").value; 
  inputValue2 = document.querySelector("#U2_input").value; 

  USER1 = inputValue1;
  USER2 = inputValue2;
}

setInterval(inputBox, 100);

// Initial Unhiding of the Submit Button
hidesubmit.classList.remove('hidesubmit')

// Unix Timestamp Conversion
function convertUnixTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return addOrdinalIndicator(formattedDate);
}

function addOrdinalIndicator(dateString) {
  const day = dateString.match(/\d+/)[0];
  let ordinalIndicator;

  if (day >= 11 && day <= 13) {
    ordinalIndicator = 'th';
  } else {
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        ordinalIndicator = 'st';
        break;
      case 2:
        ordinalIndicator = 'nd';
        break;
      case 3:
        ordinalIndicator = 'rd';
        break;
      default:
        ordinalIndicator = 'th';
    }
  }

  return dateString.replace(/\d+/, day + ordinalIndicator);
}

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

let U1_JoinDate;

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

function U1_getJoinDate() {
  const unixTimestamp = U1_UserInfo.registered.unixtime;
  U1_JoinDate = convertUnixTimestamp(unixTimestamp);
  console.log(U1_JoinDate);
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

let U2_JoinDate;

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

function U2_getJoinDate() {
  const unixTimestamp = U2_UserInfo.registered.unixtime;
  U2_JoinDate = convertUnixTimestamp(unixTimestamp);
  console.log(U2_JoinDate);
}

//// USER DATA COMPARING ////

let totalScrobbleDifference;
let topArtistScrobbleDifference;
let topAlbumScrobbleDifference;
let topTrackScrobbleDifference;

let artistVarietyDifference;
let albumVarietyDifference;
let trackVarietyDifference;

function positiveDifference(a, b) {
  return Math.abs(a - b);
}

function calculateData(){

  //// SCROBBLE DIFFERENCES ////

  // Total Scrobble Difference
  //// SCROBBLE DIFFERENCES ////

  // Total Scrobble Difference

  totalScrobbleDifference = positiveDifference(U1_UserInfo.playcount, U2_UserInfo.playcount)
    
  // Top Artist Scrobble Difference

  topArtistScrobbleDifference = positiveDifference(U1_TopArtists[0].playcount, U2_TopArtists[0].playcount)

  // Top Album Scrobble Difference

  topAlbumScrobbleDifference = positiveDifference(U1_TopAlbums[0].playcount, U2_TopAlbums[0].playcount)

  // Top Track Scrobble Difference

  topTrackScrobbleDifference = positiveDifference(U1_TopTracks[0].playcount, U2_TopTracks[0].playcount)

  // Artist Variety Difference

  artistVarietyDifference = positiveDifference(U1_UserInfo.artist_count, U2_UserInfo.artist_count)

  // Album Variety Difference

  albumVarietyDifference = positiveDifference(U1_UserInfo.album_count, U2_UserInfo.album_count)

  // Track Variety Difference

  trackVarietyDifference = positiveDifference(U1_UserInfo.track_count, U2_UserInfo.track_count)

  console.log(totalScrobbleDifference)
  console.log(topArtistScrobbleDifference)
  console.log(topAlbumScrobbleDifference)
  console.log(topTrackScrobbleDifference)
  console.log(artistVarietyDifference)
  console.log(albumVarietyDifference)
  console.log(trackVarietyDifference)
  

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
    calculateData()
    U1_getJoinDate()
    U2_getJoinDate()
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
        <a class = oneName  target = "_blank" href = ${U1_TopArtists[0].url}>${U1_TopArtists[0].name}</a>
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
      <a target = "_blank" href = ${U1_TopArtists[1].url}>${U1_TopArtists[1].name}</a>
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
      <a target = "_blank" href = ${U1_TopArtists[2].url}>${U1_TopArtists[2].name}</a>
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
      <a target = "_blank" href = ${U1_TopArtists[3].url}>${U1_TopArtists[3].name}</a>
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
      <a target = "_blank" href = ${U1_TopArtists[4].url}>${U1_TopArtists[4].name}</a>
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
        <a class = oneName  target = "_blank" href = ${U2_TopArtists[0].url}>${U2_TopArtists[0].name}</a>
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
      <a target = "_blank" href = ${U2_TopArtists[1].url}>${U2_TopArtists[1].name}</a>
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
      <a target = "_blank" href = ${U2_TopArtists[2].url}>${U2_TopArtists[2].name}</a>
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
      <a target = "_blank" href = ${U2_TopArtists[3].url}>${U2_TopArtists[3].name}</a>
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
      <a target = "_blank" href = ${U2_TopArtists[4].url}>${U2_TopArtists[4].name}</a>
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

  // Table HTML //

  comparisonTable_html = `

  <h2>Stats Leaderboard</h2>
  <table class = "comparisonTable">
    <thead>
        <tr class = tableHeads>
            <th class = corner__tableHead></th>
            <th class = U1__tableHead>${USER1}</th>
            <th class = U2__tableHead>${USER2}</th>
            <th class = winner__tableHead>Winner</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td class = "statName">Total Scrobbles</td>
          <td><span class="U1_mainStat">${U1_UserInfo.playcount}</span> <span class="U1_diffText">(${totalScrobbleDifference})</span></td>
          <td><span class="U2_mainStat">${U2_UserInfo.playcount}</span> <span class="U2_diffText">(${totalScrobbleDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Top Artist Scrobbles</td>
          <td><span class="U1_mainStat">${U1_TopArtists[0].playcount}</span> <span class="U1_diffText">(${topArtistScrobbleDifference})</span></td>
          <td><span class="U2_mainStat">${U2_TopArtists[0].playcount}</span> <span class="U2_diffText">(${topArtistScrobbleDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Top Album Scrobbles</td>
          <td><span class="U1_mainStat">${U1_TopAlbums[0].playcount}</span> <span class="U1_diffText">(${topAlbumScrobbleDifference})</span></td>
          <td><span class="U2_mainStat">${U2_TopAlbums[0].playcount}</span> <span class="U2_diffText">(${topAlbumScrobbleDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Top Track Scrobbles</td>
          <td><span class="U1_mainStat">${U1_TopTracks[0].playcount}</span> <span class="U1_diffText">(${topTrackScrobbleDifference})</span></td>
          <td><span class="U2_mainStat">${U2_TopTracks[0].playcount}</span> <span class="U2_diffText">(${topTrackScrobbleDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Artist Variety</td>
          <td><span class="U1_mainStat">${U1_UserInfo.artist_count}</span> <span class="U1_diffText">(${artistVarietyDifference})</span></td>
          <td><span class="U2_mainStat">${U2_UserInfo.artist_count}</span> <span class="U2_diffText">(${artistVarietyDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Album Variety</td>
          <td><span class="U1_mainStat">${U1_UserInfo.album_count}</span> <span class="U1_diffText">(${albumVarietyDifference})</span></td>
          <td><span class="U2_mainStat">${U2_UserInfo.album_count}</span> <span class="U2_diffText">(${albumVarietyDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Track Variety</td>
          <td><span class="U1_mainStat">${U1_UserInfo.track_count}</span> <span class="U1_diffText">(${trackVarietyDifference})</span></td>
          <td><span class="U2_mainStat">${U2_UserInfo.track_count}</span> <span class="U2_diffText">(${trackVarietyDifference})</span></td>
          <td>6000</td>
        </tr>
        <tr>
          <td class = "statName">Last.fm Account Age</td>
          <td><span class="U1_mainStat">${U1_JoinDate}</span> <span class="U1_diffText">(31050)</span></td>
          <td><span class="U2_mainStat">${U2_JoinDate}</span> <span class="U2_diffText">(31050)</span></td>
          <td><span class="Winner">36236</span></td>
        </tr>
    </tbody>
</table>

`
  document.querySelector(".table__container").innerHTML = comparisonTable_html

  // Select all rows in the table body
  const tableRows = document.querySelectorAll('.comparisonTable tbody tr');

  // Loop through each row
  tableRows.forEach((row) => {
  const U1_mainStat = row.querySelector('.U1_mainStat');
  const U2_mainStat = row.querySelector('.U2_mainStat');
  const U1_diffText = row.querySelector('.U1_diffText');
  const U2_diffText = row.querySelector('.U2_diffText');

  const U1_value = parseInt(U1_mainStat.textContent);
  const U2_value = parseInt(U2_mainStat.textContent);

  // Compare the values and apply color classes to mainStat elements

  // Adjust diff-text colors accordingly
  if (U1_value > U2_value) {
    U1_diffText.classList.add('green-text');
  } else {
    U1_diffText.classList.add('red-text');
  }

  if (U2_value > U1_value) {
    U2_diffText.classList.add('green-text');
  } else {
    U2_diffText.classList.add('red-text');
  }
  });

  });
