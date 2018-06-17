function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

function Playlist(name) {
  this.name = name,
  this.tracks = []
}

function Track(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length
}


Library.prototype.addPlaylist = function (playlist) {
  this.playlists.push(playlist)
  // console.log(`NEW PLAYLIST, ${playlist}, was added to ${this.name}`)
}

Playlist.prototype.addTrack = function (title, rating, length) {
  this.tracks.push({title: title, rating: rating, length: length, });
  // let addNewTrack = ({title, rating, length})
  // this.tracks.push(addNewTrack)
  console.log(`NEW TRACK, ${title}, was added to ${this.name}`) 
}

Playlist.prototype.totalDuration = function() {
  let duration = 0;
  this.tracks.forEach((track) => {
    duration = duration + track.length;
  })
  let seconds = duration % 60;
  let minutes = Math.floor(duration / 60);
  return `Duration of all the tracks in ${this.name} is: ${minutes} minutes and ${seconds} seconds`
}

Playlist.prototype.overallRating = function() {
  let overall = 0;
  this.tracks.forEach((track) => {
    overall = overall + track.rating
  })
  return overall / this.tracks.length
}

const spotify = new Library("Spotify", "Jenn")
// console.log(spotify)

const summer = new Playlist("Summer2018")
// console.log(newPlaylist)

const newTrack = new Track("Dance with me", 4, 240)
// console.log(newTrack)

spotify.addPlaylist("abgt250");
// console.log(spotify)

summer.addTrack("We're all we need", 5, 120);
summer.addTrack("Black room boy", 1, 130)
console.log(summer)

console.log(summer.totalDuration());
console.log(summer.overallRating());