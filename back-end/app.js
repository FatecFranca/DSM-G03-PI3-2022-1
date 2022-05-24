// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config()

// Exibindo as variáveis de ambiente no console (teste)
//console.log(process.env)

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const dbConnection = require('./config/database')
dbConnection()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/***************** ROTAS ********************* */

const glossary = require('./routes/glossary')
app.use('/glossary', glossary)

const user = require('./routes/user')
app.use('/user', user)

const assessment = require('./routes/assessment')
app.use('/assessment', assessment)

const question_group = require('./routes/question_group')
app.use('/question-group', question_group)

const question = require('./routes/question')
app.use('/question', question)

const answer = require('./routes/answer')
app.use('/answer', answer)

/********************************************* */

module.exports = app;
