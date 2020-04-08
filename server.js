const express = require('express');
const path = require('path');
const hbs = require('hbs');
let app = express();
let PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('./public'));

app.set('view engine','hbs');

// app.get('/', (req, res) => {
//     res.send()
// });

app.listen(PORT), console.log(`Listening to port ${PORT}`);