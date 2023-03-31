const notesRouter = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const notesDb = require("./db/db.json");

notesRouter.get("/notes", (req, res) => {
  res.json(notesDb);
});

notesRouter.post("/notes", (req, res) => {
  if (req.body) {
    let addNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };

    notesDb.push(addNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesDb));
    res.json(notesDb);
  } else {
    res.error("Error adding note!");
  }
});

module.exports = notesRouter;
