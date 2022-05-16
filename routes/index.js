const express = require('express');
const gameController = require('../controller/gameController');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juego de dados' });
});

/* GET Crear juego. */
router.get('/createGame', function(req, res, next) {
  res.render('create', { title: 'Create Game' , gameId: ""});
});
/* POST Create game. */
router.post('/createGame' , gameController.create_game);

/* GET Start game. */
router.get('/startGame', function(req, res, next) {
  res.render('start', { title: 'Nuevo juego', game: null });
});

module.exports = router;
