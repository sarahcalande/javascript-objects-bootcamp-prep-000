var playlist = {
  ladygaga: "just dance"
}

function updatePlaylist(playlist,key,value){
  return playlist.assign({}, key, value)
}

function removeFromPlaylist(playlist,key){
  delete playlist.key
}

