const modelGame = require('../model/modelGame');

exports.create_game = function (req, res, next) {

    const gamerOne = req.body.gamer1;
    const gamerTwo = req.body.gamer2;
    const gamerThree = req.body.gamer3;

    const game = new Game ({
        gamers: [{name: gamerOne}, {name: gamerTwo}, {name: gamerThree}]
    })

    game.save();
    const gameId = game._id;

    res.render('create', { title: 'Create Game', gameId: gameId});
};