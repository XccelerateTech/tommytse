const fs = require("fs");

class NoteService {
  constructor(file) {
    this.file = file;
    this.initPromise;//promise to initialize the note file
    this.init();
  }

  init() {
    if (!this.initPromise) { // if the initPromise is not null, we dont have to define it once again
      this.initPromise = new Promise((resolve, reject) => { //if the initPromise is null, we have to define it first
        this.read() //jump to read function which return promise
          .then(() => {
            //after read function promise resolve
            console.log("reading file");
            resolve(); //resolve the initPromise
          })
          .catch(() => {
            //if the read promise fails : empty note file
            console.log("the note file is empty");
            this.notes = {};// so that the fs.writeFile can run with this.notes = {}
            this.write() //actual promise to write {} to the file
              .then(resolve) //resolve the initPromise
              .catch(reject);
          });
      });
    }
    return this.initPromise;
  }
//unlike init() where we only define the initPromise once, every action below is a new Promise, so we return new Pormise... in functions
  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        }
        try {
          this.notes = JSON.parse(data);
        } catch (e) {
          reject(e);// to ensure there is not error in parsing the data in this.file
        }
        resolve(this.notes);
      });
    });
  }

  write() {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.file, JSON.stringify(this.notes), err => {
        if (err) reject(err);

        resolve(this.notes);
      });
    });
  }

  add(note, user) {
    return this.init().then(() => {
      if (typeof this.notes[user] === "undefined") {
        this.notes[user] = [];
      }
      this.notes[user].push(note);
      return this.write();
    });
  }

  list(user) {
    if (typeof user !== "undefined") {
      return this.init()
        .then(() => this.read())
        .then(() => {
          if (typeof this.notes[user] === "undefined") {//if the user input nothing and submit
            return [];
          } else {
            return this.notes[user];
          }
        });
    } else {
      return this.init().then(() => {
        return this.read();
      });
    }
  }

  update(index, note, user) {
    return this.init().then(() => {
      if (typeof this.notes[user] === "undefined") {
        throw new Error("Cannot update a note, if the user doesnt exist");
      }
      if (this.notes[user].length <= index) {
        throw new Error("Cannot update a note that doesnt exist");
      }
      this.notes[user][index] = note;
      return this.write();
    });
  }

  remove(index, user) {
    return this.init().then(() => {
      if (typeof this.notes[user] === "undefined") {
        throw new Error("Cannot remove a note, if the user doesnt exist");
      }
      if (this.notes[user].length <= index) {
        throw new Error("Cannot remove a non-existent note");
      }
      this.notes[user].splice(index, 1);
      return this.write();
    });
  }
}

module.exports = NoteService;
