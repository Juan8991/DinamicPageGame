const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const   ModelGame = require('../model/modelGame');
const controller = require('../controller/gameController');
const gameIdc= controller.gameId;

const {validateH} =require('../validator/validator')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juego de dados' });
});

/* GET Crear juego. */
router.get('/createGame', function(req, res, next) {
  res.render('create',{title:"Juego de dados" ,gameId:""});
});
/* POST guardar los nombre de los jugadores. */
router.post('/createGame' ,controller.createNewGame);

/* GET comenzar el juego. */
router.get('/startGame', function(req, res, next) {
  res.render('start', { title: 'Juego de dados', game: "" ,gameId:""});
});
/* GET comenzar el juego. */
router.post('/startGame', controller.startGame);

router.get('/games',function(req, res, next) {
  res.render('search', { title: 'Juego de dados',gameById:"" });
});
router.post('/game/:id',controller.findGame);

router.get('/game',function(req, res, next) {
  res.render('searchWinner', { title: 'Juego de dados',gameById:"" });
});
router.post('/game/:id/winner',controller.findWinner);


module.exports = router;
