const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const kolkataTime = moment().tz('Asia/Kolkata').format('h:mm:ss A z');
    const newYorkTime = moment().tz('America/New_York').format('h:mm:ss A z');
    const londonTime = moment().tz('Europe/London').format('h:mm:ss A z');

    res.send(`
        <h1>Mini Clock</h1>
        <p>Kolkata: ${kolkataTime}</p>
        <p>New York: ${newYorkTime}</p>
        <p>London: ${londonTime}</p>
        <script>
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        </script>
    `);
});

app.listen(port, () => {
    console.log(`Mini Clock web app listening at http://localhost:${port}`);
});