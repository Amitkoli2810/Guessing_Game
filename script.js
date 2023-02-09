let computerGusser;
let userGuesser=[];
let userNumberUpdate = document.getElementById('textOutput');
let resetInput = document.getElementById('inputbox')

const init=()=>{
    computerGusser= Math.floor(Math.random()*100)
    document.getElementById('gamearea').style.display='none'
    document.getElementById('newGameBtn').style.display='none'
}

const startGame = ()=>{
    document.getElementById('welcomescreen').style.display='none'
    document.getElementById('gamearea').style.display='block'
}
const startNewGame=()=>{
    document.getElementById('newGameBtn').style.display='inline'
    resetInput.setAttribute('disabled',true)
}
const newGameBegin=()=>{
    window.location.reload()
}
const compareGuess = ()=>{
    const userNumber = Number(document.getElementById('inputbox').value)
    userGuesser = [...userGuesser,userNumber]
    document.getElementById('guess').innerHTML=userGuesser
    if(userGuesser.length<maxGuess){
    if(computerGusser < userNumber){
        userNumberUpdate.innerHTML= 'Your guess is high ';
        resetInput.value = '';
      
    }else if(computerGusser > userNumber){
        userNumberUpdate.innerHTML='Your guess is low';
        resetInput.value='';
       
    }else{
        userNumberUpdate.innerHTML='Correct Guess'
        resetInput.value='';
        startNewGame();
    }
}else{
    if(computerGusser < userNumber){
        userNumberUpdate.innerHTML= `Your correct number was ${computerGusser}`;
        resetInput.value = '';
        startNewGame();
    }else if(computerGusser > userNumber){
        userNumberUpdate.innerHTML=`Your correct number was ${computerGusser}`;
        resetInput.value='';
        startNewGame();
    }else{
        userNumberUpdate.innerHTML='Correct Guess'
        resetInput.value='';
        startNewGame();
    }
}
    document.getElementById('attempts').innerHTML=userGuesser.length;

}
const easyMode =()=>{
    maxGuess=10;
    startGame()
}

const hardMode = ()=>{
    maxGuess=5;
    startGame();
}