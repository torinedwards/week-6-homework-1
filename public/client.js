// client-side js
// run by the browser each time your view template is loaded

function run() {
    
  fetch('/search-track').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    
      // '<h3><a href="' + data.external_urls.spotify + '" target="blank">' + data.name + '</a></h3>'
      
    var node = document.createElement("a");                 // Create a <li> node
    node.setAttribute('href', data.external_urls.spotify);
    var textnode = document.createTextNode(data.name);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      document.getElementById("myList").appendChild(node);
      
     
   
    
    // Display the artist name
    var artists = '';
    
    data.artists.forEach(function(item) {
      artists = artists + item.name + ' ';
    });
    
    let h5 = document.createElement('h5');
    h5.innerText = artists;
    document.getElementById('search-track-container').append(h5);
    
    // Display the album art    
    var img = document.createElement("img");
    img.setAttribute('src', data.album.images[0].url);
    document.getElementById('search-track-container').append(img);
  });
    
  fetch('/category-playlists').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the covers of the playlists
    data
      .forEach((c) => {
          let h1 = document.createElement('h1');
          h1.innerText = c.name;
      document.getElementById('category-playlists-container').append(h1)
      c.data.playlists.items.map(function(playlist, i) {
    
      var img = document.createElement("img");
      img.setAttribute('src', playlist.images[0].url);
      document.getElementById('category-playlists-container').append(img);
    
 
    });
    })
  });
    fetch('/category-playlists').then(resp => resp.json()).then((data) => {

    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "speechiness", "loudness"]
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        
        
     let p = document.createElement('p');
             let span = document.createElement('span');

      document.getElementById('audio-features-container').append(p).appendChild($(`data[key] + ' </span>'  + key `));
        

        
      }
    });
  });
  
  
  fetch('/artist').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image

  var img = document.createElement("img");
      img.setAttribute('src', data.images[0].url);
      document.getElementById('artist-container').append(img);
    
    // Display the artist name
    
       let h3 = document.createElement('h3');
    h3.innerText = data.name;
    document.getElementById('search-track-container').append(h3);
    
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      
      
    let p = document.createElement('P');
    p.innerText = genre;
    document.getElementById('artist-container').append(p);
      
    });
  });
  
  
    fetch('/artist-top-tracks').then(resp => resp.json()).then((data) => {

    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the audio features
    data.map(function(track, i) {
      
        
    let li = document.createElement('li');
    li.innerText = track.name;
    document.getElementById('top-tracks-container').append(li);
    
    });
  });

};
run();
