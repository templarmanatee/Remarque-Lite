// Server library imports
const express = require("express");
const path = require("path");
const api = require("./routes");

// Current port
const PORT = process.env.PORT || 3001;

//Server middleware
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

app.use(express.static("public"));

// Routing
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
