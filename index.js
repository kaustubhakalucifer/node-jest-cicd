const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req,res) => {
    res.status(200).send("Hello world");
});

app.listen(PORT || 3000, () => {
    console.log(`Listening on port ${PORT || 3000}`);
});

module.exports = app;