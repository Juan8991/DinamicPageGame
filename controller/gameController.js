
const  ModelGame = require('../model/modelGame');

//Guardar los datos de los jugadores en la base de datos
exports.createNewGame = async(req,res) =>{
    // try{
        const {gamer1,gamer2,gamer3}=req.body
        console.log(gamer1,gamer2,gamer3);
        const newGame =new ModelGame({gamers:[{name:gamer1},{name:gamer2},{name:gamer3}]});
        await newGame.save();
        const gameId=newGame._id;
        res.render('create',{gameId:gameId})
    // }catch(e){
    //     HttpError(res,e)
    // }  
  }
//Funcion que permite dar a conocer las apuesta de los jugadores, 
exports.startGame = async(req,res) =>{
    const gameId2 = req.body.gameId;
    const gameToPlay = await ModelGame.findById(gameId2);
    const gameWithBets = createGameBets(gameToPlay);
    gameToPlay.inProgress = false;
    gameToPlay.winner = setWinner(gameWithBets);
    const gameToPlay2 =  await ModelGame.findByIdAndUpdate(gameId2,gameToPlay);
    res.render('start',{title: 'Juego de Dados',
    gameWithBets:gameWithBets,
    game:gameToPlay,
    winner:gameToPlay.winner})
  }

exports.findGame = async (req,res) =>{
    const id = req.body.idInput;
    
    const gameToFind = await ModelGame.findById(id)
    res.render('searchId', { title: 'Juego de Dados', gameById: gameToFind});
    };
exports.findWinner = async (req,res) =>{
    const id = req.body.idWinner;
    console.log(id)
    const gameToFind = await ModelGame.findById(id)
    res.render('winner', { title: 'Juego de Dados', gameById: gameToFind});
    
}
function createGameBets(newGame) {
    const betsOfGame = [];
    betsOfGame.push({
        id: newGame.gamers[0]._id,
        name: newGame.gamers[0].name,
        bet: randomNumber()
    });
    betsOfGame.push({
        id: newGame.gamers[1]._id,
        name: newGame.gamers[1].name,
        bet: randomNumber()
    });
    betsOfGame.push({
        id: newGame.gamers[2]._id,
        name: newGame.gamers[2].name,
        bet: randomNumber()
    });
    
    return betsOfGame;
}
//Generar un número random      
function randomNumber(){
    let min = 1;
    let max = 6;
    let rNumber = Math.floor(Math.random() * (max - min)) + min;
    return rNumber;
}
//Obtener Ganador 
function setWinner(betsGa){
    const orderBets = betsGa.sort(function(a, b){return a.bet - b.bet})
    const winner= orderBets[2].name;
    return winner
} 


  