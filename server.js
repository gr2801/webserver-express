const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');


app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // res.send('Hello World');
    // let salida = {
    //     nombre: 'Gustavo',
    //     edad: 53,
    //     url: req.url

    // }

    res.render('home', {
        nombre: 'gustavo raul rossi'
    });

});

app.get('/about', (req, res) => {
    res.render('about');

});

// app.get('/data', (req, res) => {
//     res.send('Hello Data');

// });


app.listen(port, () => {
    console.log(`escuchando en el port ${ port }`);

});