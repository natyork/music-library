var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


var printPlaylists = function () {

  var pID = library.playlists;
  for (var key in pID) {
    var playID = pID[key].id;
    var playName = pID[key].name;
    var numTracks = pID[key].tracks.length;
    var result = playID + ': ' + playName + ' - ' + numTracks + ' tracks';
    console.log(result);
  }

}



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var tID = library.tracks; //tID = tracks:{...}
  for (var key in tID) {
    var trackID = tID[key].id;
    var trackName = tID[key].name;
    var trackArtist = tID[key].artist;
    var trackAlbum = tID[key].album;
    var result = trackID + ': ' + trackName + ' by ' + trackArtist + ' (' + trackAlbum + ')';
    console.log(result);
  }

}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
//for testing playlistID parameter passed is 'p01'

  var pID = library.playlists[playlistId];// pID = p01:{...};
  var playID = pID.id;
  var playName = pID.name;
  var numTracks = pID.tracks.length;
  var result = playID + ': ' + playName + ' - ' + numTracks + ' tracks';
  console.log(result);

  var trackListArray = pID.tracks; //trackListArray = [t01,...]
  for (i of trackListArray){
    var tID =library.tracks[i]; // tID = library:{tracks:{t0x:{...}
    var trackID = tID.id;
    var trackName = tID.name;
    var trackArtist = tID.artist;
    var trackAlbum = tID.album;
    var result = trackID + ': ' + trackName + ' by ' + trackArtist + ' (' + trackAlbum + ')';
    console.log(result);
  }

}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
//for testing add t01 to p02

  var pID = library.playlists[playlistId];// pID = p02:{...};
  var trackListArray = pID.tracks; //trackListArray = [t01,...]
  trackListArray.push(trackId);
  // console.log(trackListArray);

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

  var newtID = 't' + uid(); // new ID string
  // console.log(typeof newtID);
  if (!library.tracks[newtID]) {
    var newTrack = (library.tracks[newtID]={});
    // console.log(newTrack);
    newTrack['id'] = newtID;
    newTrack['name'] = name;
    newTrack['artist'] = artist;
    newTrack['album'] = album;
  }
  console.log(library.tracks);
}


// adds a playlist to the library

var addPlaylist = function (name) {

 var newpID = 'p' + uid(); // new ID string
  // console.log(typeof newtID);
  if (!library.playlists[newpID]) {
    var newPlaylist = (library.playlists[newpID]={});
    // console.log(newPlaylist);
    newPlaylist['id'] = newpID;
    newPlaylist['name'] = name;
    newPlaylist['tracks'] = [];
  }
  console.log(library.playlists);

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

//function calls for testing
printPlaylists();
printTracks();
printPlaylist('p01');
addTrackToPlaylist('t01', 'p02');
addTrack('Fat Bottomed Girls', 'Queen', 'Jazz (1978)');
addPlaylist('Running');

// console.log(uid());