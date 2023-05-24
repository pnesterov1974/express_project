const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'EJS'});
});

app.listen(PORT, () => {
    console.log(`Server listens on port ${chalk.green(PORT)}`);
});



