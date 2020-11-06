const express = require('express');
const path = require('path');
const open = require('open');
const port = 3000;
const app = express();

app.get('/**', function (req, res) {
    if (req.url === "/") {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    } else {
        const filename = req.url.indexOf(".js") === -1 ? req.url + ".js" : req.url;
        res.sendFile(path.join(__dirname, "../client/" + filename));
    }
})

app.listen(port, function (err) {
    if (err) {
        console.log(err)
    } else {
        open('http://localhost:' + port)
    }
});