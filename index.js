const fs = require("fs");

const keyboard = fs.readFile("./keyboard.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
