const fs = require("fs");

class NoteService {
  constructor(filename) {
    this.filename = filename;
    this.notes = [];
    this.listNotePromise = this.listNote();
  }

  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filename, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.notes = JSON.parse(data);
        resolve(this.notes);
      });
    });
  }

  write() {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filename, JSON.stringify(this.notes), err => {
        if (err) {
          reject(err);
        }
        resolve(this.notes);
      });
    });
  }

  listNote(user) {
    return new Promise((resolve, reject) => {
      return this.read();
    });
  }

  addNote(note, user) {
    return new Promise((resolve, reject) => {
      this.listNotePromise.then(() => {
        this.notes[user].push(note);
        return this.write();
      });
    });
  }

  updateNote(index, note, user) {
    return new Promise((resolve, reject) => {
      this.notes[user][index] = note;
      return this.write();
    });
  }

  deleteNote(index, user) {
    return new Promise((resolve, reject) => {
      this.listNotePromise.then(() => {
        this.notes[user].splice(index, 1);
        return this.write();
      });
    });
  }
}

module.exports = NoteService;
