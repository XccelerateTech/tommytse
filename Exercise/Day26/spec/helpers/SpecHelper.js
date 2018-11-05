beforeEach(function() {
  jasmine.addMatchers({
    toBeInTheSameAlbumAs: function() {
      return {
        compare: function(actual, expected) {
          var song = actual;

          return {
            pass: song.album === expected.album
          };
        }
      };
    }
  });
});
