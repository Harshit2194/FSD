// Node.js built-in module
const fs = require("fs");

/* READ FILE */
fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

/* WRITE FILE (create / overwrite) */
fs.writeFile("a.txt", "Hello Node.js", (err) => {
  if (!err) console.log("File written");
});

/* APPEND FILE */
fs.appendFile("a.txt", "\nAppended text", (err) => {
  if (!err) console.log("Data appended");
});

/* CREATE EMPTY FILE */
fs.writeFile("b.txt", "", (err) => {
  if (!err) console.log("File created");
});

/* RENAME / MOVE FILE */
fs.rename("b.txt", "folder/b.txt", (err) => {
  if (!err) console.log("File renamed/moved");
});

/* DELETE FILE */
fs.unlink("a.txt", (err) => {
  if (!err) console.log("File deleted");
});

/* CHANGE FILE PERMISSIONS */
fs.chmod("folder/b.txt", 0o644, (err) => {
  if (!err) console.log("Permissions changed");
});