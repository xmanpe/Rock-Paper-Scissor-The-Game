function getPilihanComputer(){
    let pilihanComputer = parseInt(Math.random()*255 + 1);

    if(pilihanComputer >= 1 && pilihanComputer <= 175){
        return 'rock';
    }
    else if(pilihanComputer >= 176 && pilihanComputer <= 210){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}
function getHasil(comp, player){
    if(player ==  comp){
        return 'DRAW! 😁';
    }
    else if(player == 'rock' && comp == 'paper'){
        return 'YOU LOSE! 🥲';
    }
    else if(player == 'rock' && comp == 'scissor'){
        return 'YOU WIN! 🎉';
    }
    else if(player == 'paper' && comp == 'rock'){
        return 'YOU WIN! 🎉';
    }
    else if(player == 'paper' && comp == 'scissor'){
        return 'YOU LOSE! 🥲'; 
    }
    else if(player == 'scissor' && comp == 'rock'){
        return 'YOU LOSE! 🥲';
    }
    else if(player == 'scissor' && comp == 'paper'){
        return 'YOU WIN! 🎉';
    }              
}
const pRock = document.querySelector('#rock');
pRock.addEventListener('click', function(){
    let theResult = document.querySelector('#text');
    let computerImg = document.querySelector('#inputComputer');
    let current1 = document.querySelector('#current1');

    let inputPlayer = 'rock';
    let inputComputer = getPilihanComputer();
    let result = getHasil(inputComputer, inputPlayer);

    current1.innerHTML = 'current';
    current2.innerHTML = '';
    current3.innerHTML = '';

    theResult.innerHTML = result;
    if(inputComputer == 'rock'){
        computerImg.setAttribute('src', 'images/rock.png');
    }
    else if(inputComputer == 'paper'){
        computerImg.setAttribute('src', 'images/paper.png');
    }
    else if(inputComputer == 'scissor'){
        computerImg.setAttribute('src', 'images/scissor.png');
    }

});
const pPaper = document.querySelector('#paper');
pPaper.addEventListener('click', function(){
    let theResult = document.querySelector('#text');
    let computerImg = document.querySelector('#inputComputer');
    let current2 = document.querySelector('#current2');

    let inputPlayer = 'paper';
    let inputComputer = getPilihanComputer();
    let result = getHasil(inputComputer, inputPlayer);
    
    current1.innerHTML = '';
    current2.innerHTML = 'current';
    current3.innerHTML = '';
    
    theResult.innerHTML = result;
    if(inputComputer == 'rock'){
        computerImg.setAttribute('src', 'images/rock.png');
    }
    else if(inputComputer == 'paper'){
        computerImg.setAttribute('src', 'images/paper.png');
    }
    else if(inputComputer == 'scissor'){
        computerImg.setAttribute('src', 'images/scissor.png');
    }
});
const pScissor = document.querySelector('#scissor');
pScissor.addEventListener('click', function(){
    let theResult = document.querySelector('#text');
    let computerImg = document.querySelector('#inputComputer');
    let current3 = document.querySelector('#current3');

    let inputPlayer = 'scissor';
    let inputComputer = getPilihanComputer();
    let result = getHasil(inputComputer, inputPlayer);

    current1.innerHTML = '';
    current2.innerHTML = '';
    current3.innerHTML = 'current';

    theResult.innerHTML = result;
    if(inputComputer == 'rock'){
        computerImg.setAttribute('src', 'images/rock.png');
    }
    else if(inputComputer == 'paper'){
        computerImg.setAttribute('src', 'images/paper.png');
    }
    else if(inputComputer == 'scissor'){
        computerImg.setAttribute('src', 'images/scissor.png');
    }
});