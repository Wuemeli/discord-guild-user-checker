const express = require('express');
const request = require('request');

const app = express();

app.get('/server-info', (req, res) => {
  request({
    url: 'https://discord.com/api/guilds/{server id}',
    headers: {
      'Authorization': 'Bot {API key}'
    }
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
      return;
    }
    res.send(JSON.parse(body));
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
