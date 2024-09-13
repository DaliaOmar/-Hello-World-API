const express = require('express');
const app = express();
const os = require('os');
const port = process.env.PORT || 3001;

app.get('/hello', (req, res) => {
    const name = req.query.name || 'World';
    res.json({ greeting: `Hello, ${name}!` }); 
});


app.get('/info', (req, res) => {
    const headers = req.headers;
    const clientAddress = req.ip;
    const time = new Date().toISOString();
    const hostName = os.hostname();

    res.json({
        time: time,
        client_address: clientAddress,
        host_name: hostName,
        headers: headers
    });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

module.exports = app; 