const express = require("express");

class NoteRouter {
  constructor(noteService) {
    this.noteService = noteService;
  }

  router() {
    let router = express.Router();
    router.get("/", this.router.get.bind(this));
    router.post("/", this.router.post.bind(this));
    router.put("/:id", this.router.put.bind(this));
    router.delete("/:id", this.router.delete.bind(this));
  }

  get(req, res) {
    return this.noteService
      .listNote(req.auth.user)
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  }

  post(req, res) {
    return this.noteService
      .addNote(req.body.note, req.auth.user)
      .then(() => this.noteService.listNote(req.auth.user))
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  }

  put(req, res) {
    return this.noteService
      .updateNote(req.params.id, req.body.note, req.auth.user)
      .then(() => this.noteService.listNote(req.auth.user))
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  }

  delete(req, res) {
    return this.noteService
      .updateNote(req.params.id, req.auth.user)
      .then(() => this.noteService.deleteNote(req.auth.user))
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  }
}
