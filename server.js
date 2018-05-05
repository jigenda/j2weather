const express = require('express');

const hbs = require('hbs');

const port = process.env.PORT || 3002;

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

// Enable this for maintenance
// app.use((req, res, next) => {
//     res.render('maintenance', {
//         pageTitle: 'The site is under maintenance'
//     });
     
// });

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {


    res.render('home', {
        pageTitle: 'Welcome',
        name: 'Jing t',
         
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',
         
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: '404 page'
    })
});



app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});