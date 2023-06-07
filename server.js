const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
  res.send(`Made By Wild Life Studio`);
});

function keepAlive() {
  server.listen(3000, () => {
    console.log(`Server Is Ready Now Made By Wild Life Studio | ` + Date.now());
  });
}

module.exports = keepAlive;