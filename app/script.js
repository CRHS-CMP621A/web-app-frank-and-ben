let KEY = `b725d7c3f1302cf77740c3198f72ff35`;
let USER1 = `Superfrancis123`;
let USER2 = `Exticx`;

//// USER 1 DATA ////
// Calls data for the first user from the last.fm API and stores it on the site

// Top Stats //

// Top Artists 
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1topArtists = data.topartists.artist;

    console.log(U1topArtists)

  })

// Top Tracks
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1topTracks = data.toptracks.track;

    console.log(U1topTracks)

  })

// Top Genres (Tags)

fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTags&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1topGenres = data.toptags.tag;

    console.log(U1topGenres)

  })

// Recent Stats //

// Recent Tracks
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=5&user=${USER1}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const U1recentTracks = data.recenttracks.track;

    console.log(U1recentTracks)

  })



  