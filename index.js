let ROCK;
let PAPER;
let SCISSOR;

const gameObjects = [ 'ROCK', 'PAPER', 'SCISSOR']

//choose objects at random from the gameObjects array..
// function chooseObject(){
//     let gamePlay = gameObjects[Math.floor(Math.random() *gameObjects.length)]
//     console.log(gamePlay)
    
// }
// chooseObject();

//this function allows the computer to cjoose any random object from gameObject array
function computerPlay(){
    let gamePlay = gameObjects[Math.floor(Math.random() *gameObjects.length)]
    console.log(gamePlay)
    return gamePlay    
}

const playerSelection = prompt("Input guess").toLocaleUpperCase();
console.log(playerSelection)
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `Its a Draw`
    }else if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')){
        return `You lose, PAPER covers ROCK`
    }else if ((playerSelection === 'ROCK') && (computerSelection === 'SCISSOR')){
        return `You won, Rock crshes SCISSOR`
    
    }else if(playerSelection === 'SCISSOR' && computerSelection === 'PAPER'){
        return `You won this round!!, SCISSOR cuts PAPER`
    }else if(playerSelection === 'SCISSOR' && computerSelection === 'ROCK'){
        return `You lose, ROCK crushes SCISSOR`
    }else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        return `You won this round!!, PAPER covers ROCK`
    }else if(playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){
        return `You lose, SCISSOR cuts PAPER`
    }else{
        console.log('again')
    }    
}

console.log(playRound(playerSelection, computerSelection));

function game(){
    for ( let i =0; i < 5; i++){

        console.log('')
    }
}
game(playRound());




// console.log(playerSelection)
// console.log(computerPlay())
