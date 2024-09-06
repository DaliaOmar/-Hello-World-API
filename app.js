const express = require('express');
const os = require('os');

const app = express();
const port = 3001;

// hello
app.get('/hello', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.json({
        greeting: `Hello, ${name}`
    });
});

// info
app.get('/info', (req, res) => {
    const clientAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const hostName = os.hostname();
    const headers = req.headers;
    const currentTime = new Date().toISOString();

    res.setHeader('Content-Type', 'application/json');
    res.json({
        time: currentTime,
        client_address: clientAddress,
        host_name: hostName,
        headers: headers
    });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
