let KEY = 'b725d7c3f1302cf77740c3198f72ff35';
let USER = 'Superfrancis123';

// Top Artists 
fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${USER}&api_key=${KEY}&format=json`)
  .then(response => response.json())
  .then(data => {
    const topArtists = data.topartists.artist;

    console.log(topArtists);
    console.log(`Top Artists for ${USER}:`);
    console.log(topArtists[0].name)
    console.log(topArtists[1].name)
    console.log(topArtists[2].name)
    console.log(topArtists[3].name)
    console.log(topArtists[4].name)

  })