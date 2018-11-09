const NoteService = require("../NodeService");
const fs = require("fs");

describe("Testing noteService", function() {
  beforeEach(() => {
    if (fs.existsSync("test.json")) {
      fs.unlinkSync("test.json");
    }
    fs.writeFileSync("test.json", "[]");
  });

  it("list our notes using listNote", function(done) {
    const noteService = new NoteService("test.json");

    noteService
      .listNote()
      .then(result => {
        expect(result).toEqual([]);
        done();
      })
      .catch(err => {
        console.log(err);
      });
  });

  it("add a note using addNote()", function(done) {
    const noteService = new NoteService("test.json");

    noteService
      .addNote("test")
      .then(() => {
        return noteService.listNote();
      })
      .then(result => {
        expect(result).toEqual(["test"]);
        done();
      })
      .catch(err => {
        done.fail(err);
      });
  });

  it("should be able to add more than one note using addNote()", function(done) {
    //create a new noteService instance
    //add one note
    //then, add another note
    //then list the notes, here we expect we notes.

    const noteService = new NoteService("test.json");
    noteService
      .addNote("test1")
      .then(() => {
        return noteService.addNote("test2");
      })
      .then(() => {
        return noteService.listNote();
      })
      .then(result => {
        expect(result).toEqual(["test1", "test2"]);
        done();
      })
      .catch(err => {
        done.fail(err);
      });
  });

  it("add notes before listing notes, whole having the preious notes", function(done) {
    const noteService = new NoteService("test.json");
    noteService.addNote("test1").then(() => {
      const noteService2 = new NoteService("test.json");
      return noteService2
        .addNote("test2")
        .then(() => {
          return noteService2.listNote();
        })
        .then(result => {
          expect(result).toEqual(["test1", "test2"]);
          done();
        })
        .catch(err => {
          done.fail(err);
        })
        .catch(err => {
          done.fail(err);//handling two different blocks errors
        });
    });
  });
});
