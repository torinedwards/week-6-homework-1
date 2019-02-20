// client-side js
// run by the browser each time your view template is loaded

$(function() {
    
  $.get('/search-track', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#search-track-container');

  
    // Display artist name  
    var artistName = $('<h3>' + '<a href="https://open.spotify.com/track/05t7JMip6JrLuSrMV5yYjX" target=_blank>'+ data.artists[0].name + '</a>' + '</h3>');
    artistName.appendTo('#search-track-container');
    
  
    
    // Display the album art
    var img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
  $.get('/category-playlists', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the covers of the playlists
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
  });
  
  $.get('/audio-features', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "loudness", "tempo"]
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
        feature.appendTo('#audio-features-container');
      }
    });
  });
  
  $.get('/artist', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image
    var img = $('<img class="circle-image" />');
    img.attr('src', data.images[0].url);
    img.appendTo('#artist-container');
    
    // Display the artist name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#artist-container');
      var trackFollow = $('<h3>' + 'Total Followers: ' + data.followers.total + '</h3>');
    trackFollow.appendTo('#artist-container');
      var trackPop = $('<h3>' + 'Popularity Score: ' + data.popularity + '</h3>');
    trackPop.appendTo('#artist-container');
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      var genreItem = $('<p>' + genre + '</p>');
      genreItem.appendTo('#artist-container');
    });
  });
  
  $.get('/artist-top-tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the audio features
    data.map(function(track, i) {
      var artistnm = $('<li>' + track.artists.name + '</li>');
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container');
      artistnm.appendTo('#top-tracks-container');
    });
  });
  $.get('/ArtistRelatedArtists', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /ArtistRelatedArtists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    
    // Display the audio features
    data.map(function(track, i) {
      var related = $('<li>' + track.name + '</li>');
      related.appendTo('#related');

    });
  });
  

});
