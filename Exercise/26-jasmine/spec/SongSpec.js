describe("Song", () => {
  var Song = require("../Song");
  var song, othersong1, othersong2, songDuplicate;
  beforeEach(function() {
    song = new Song("Storia", "Red Moon", "Yuki Kajiura");
    songDuplicate = new Song("Storia", "Red Moon", "Yuki Kajiura");
    othersong1 = new Song("progressive", "Red Moon", "Yuki Kajiura");
    othersong2 = new Song("Magia", "After Eden", "Yuki Kajiura");
  });
  afterEach(function() {
    song;
    othersong1;
    othersong2;
    songDuplicate;
  });
  it("should store the name of the song correctly", () => {
    expect(song.name).toEqual("Storia");
  });
  it("should store the album of the song correctly", () => {
    expect(song.album).toEqual("Red Moon");
  });
  it("should store the author of the song correctly", () => {
    expect(song.author).toEqual("Yuki Kajiura");
  });
  it("Should return the description of the song", () => {
    expect(song.getDescription()).toEqual(
      "The name of this song is Storia and it is from the album Red Moon. It is written by Yuki Kajiura"
    );
  });
  it("Should return true if two songs are from the same album ", () => {
    expect(song.isInSameAlbum(othersong1)).toEqual(true);
  });
  it("Should return false if two songs are not from the same album ", () => {
    expect(song.isInSameAlbum(othersong2)).toEqual(false);
  });
  it("Should return true if two songs are from the same album ", () => {
    expect(song).toBeInTheSameAlbumAs(othersong1);
  });
  it("Should return false if two songs are not from the same album ", () => {
    expect(song).not.toBeInTheSameAlbumAs(othersong2);
  });
  it("Should be equal to songDuplicate", () => {
    expect(song).toEqual(songDuplicate);
  });
  it("Should not be the same even the properties are the same", () => {
    expect(song).not.toBe(songDuplicate);
  });
});
