const express = require('express');
const app = express();
const port = 3000;

const { engine } = require ('express-handlebars');

app.use(express.static('public'));


app.set('view engine', 'hbs');

app.engine('hbs', engine({ 
     defaultLayout: 'main',
extname: '.hbs'
}));



app.get('/', (req, res) => {

res.render('home');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});