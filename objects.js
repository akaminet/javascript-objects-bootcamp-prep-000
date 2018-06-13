<<<<<<< HEAD
var playlist = {beyonce: "Halo"}

function updatePlaylist(obj, artist, song){
  obj[artist] = song
  return obj
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
=======
var playlist = {}

function updatePlaylist(obj, artist, song){
  Object.assign(obj, artist, song)
  return obj
}

function removePlaylist(obj, artist){
  delete obj.artist
>>>>>>> 52da8996a0cbf49c236c5f2eadafefea8fe3d34a
}