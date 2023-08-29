require('dotenv').config();
const express = require('express');     // npm i express
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node '
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node '
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node '
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})