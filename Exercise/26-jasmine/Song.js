class Song {
  constructor(name, album, author) {
    this.name = name;
    this.album = album;
    this.author = author;
  }
  persistFavoriteStatus(value) {
    // something complicated
    throw new Error("not yet implemented");
  }

  getDescription() {
    return `The name of this song is ${this.name} and it is from the album ${
      this.album
    }. It is written by ${this.author}`;
  }

  isInSameAlbum(otherSong) {
    if(otherSong.album == this.album) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Song;
