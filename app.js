var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Para utilizar variables de entorno
require('dotenv').config();
//
//Conexion a base de datos
const mongoose = require('mongoose');

const uri=`mongodb+srv://${process.env.USERN}:${process.env.PASSWORD}@mycluster.edywy.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
  {useNewUrlParser: true,
  useUnifiedTopology: true}
)
.then(()=>{console.log("Conexion a base de datos ESTABLECIDA...")})
.catch(e=>{console.log(e)});


//Rutas
var indexRouter = require('./routes/index');
//var gameRoutes = require('./routes/gameRoutes');


app.use('/', indexRouter);
//app.use('/game', gameRoutes);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
