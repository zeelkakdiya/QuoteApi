require("dotenv").config();
const app = require("./app");
console.log(process.env.HOSTNAME);
const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME;

app.listen(port, hostname, () => {
  return console.log(`Server running at http://${hostname}:${port}/`);
});
